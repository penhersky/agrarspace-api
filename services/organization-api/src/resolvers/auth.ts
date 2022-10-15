import { UserInputError } from 'apollo-server-koa';
import {
  User,
  Organization,
  Employee,
  encrypt,
  UserTypes,
  UserRoles,
} from '@agrarspace/shared';

import {
  AuthenticateResolver,
  SingInResolver,
  SignInToOrganization,
  RefreshTokenResolver,
  SingUpResolver,
} from '../types/resolvers';
import { findUserByEmail, findUserById, createUser } from '../service/user';
import {
  findOrganizationById,
  findOrganizationByOwnerId,
} from '../service/organization';
import {
  findEmployeeByNameAndOrganizationId,
  findEmployeeById,
} from '../service/employee';
import {
  createRefreshToken,
  createSessionToken,
  verifyToken,
} from '../service/token.service';
import { AppError } from '../utils/error';
import * as validate from '../utils/validation/auth';
import { IRefreshToken } from '../types/token';

export const signUp: SingUpResolver = async (_, { data }) => {
  const user = await findUserByEmail(User, data.email);

  if (user) AppError.userInput('Invalid email');

  const validateUser = await validate.user({
    email: data.email,
    name: data.name,
  });

  if (validateUser)
    AppError.userInput('Invalid user data', { details: validateUser });

  const validatePassword = await validate.password({
    password: data.password,
  });

  if (validatePassword)
    AppError.userInput('Invalid password', { details: validateUser });

  await createUser(User, { ...data, role: UserRoles.User, provider: 'email' });

  return true;
};

export const signIn: SingInResolver = async (_, { data, info }) => {
  const user = await findUserByEmail(User, data.email);

  if (!user) AppError.userInput('Bad user data for authorization');
  if (user?.provider !== 'email')
    AppError.userInput('Bad user authentication provider', {
      argumentName: 'provider',
    });

  const compareResult = await encrypt.compare(
    data.password,
    user?.password as string,
  );
  if (!compareResult)
    throw new UserInputError('Bad user data for authorization');

  const organization = await findOrganizationByOwnerId(
    Organization,
    user?.id as number,
  );

  const rToken = createRefreshToken({
    id: user?.id as number,
    type: UserTypes.User, // TODO: Create switch on user or admin
    system: info,
  });
  const token = createSessionToken({
    userId: user?.id as number,
    type: UserTypes.User, // TODO: Create switch on user or admin
    organizationId: organization?.id,
    organizationOwnerId: organization?.ownerId,
    userRole: user?.role,
  });

  return {
    token,
    rToken,
    type: UserTypes.User, // TODO: Create switch on user or admin
  };
};

export const signInToOrganization: SignInToOrganization = async (
  _,
  { data, info },
) => {
  const organization = await findOrganizationById(
    Organization,
    data.organizationId,
  );

  if (!organization) AppError.userInput('such an organization does not exist');

  const user = await findEmployeeByNameAndOrganizationId(
    Employee,
    organization?.id as number,
    data.name,
  );

  if (!user) throw new UserInputError('Bad user data for authorization');
  const compareResult = await encrypt.compare(
    data.password,
    user.password as string,
  );
  if (!compareResult)
    throw new UserInputError('Bad user data for authentication');

  const rToken = createRefreshToken({
    id: user?.id as number,
    type: UserTypes.Employee, // TODO: Create switch on user or admin
    system: info,
  });
  const token = createSessionToken({
    userId: user?.id as number,
    type: UserTypes.Employee, // TODO: Create switch on user or admin
    organizationId: organization?.id,
    organizationOwnerId: organization?.ownerId,
    employeeRole: user.role,
  });

  return {
    token,
    rToken,
    type: UserTypes.Employee,
  };
};

export const authenticate: AuthenticateResolver = async (
  _,
  {},
  { user: contextUser },
) => {
  if (!contextUser?.id) AppError.authentication('Session das not exists');

  if (
    contextUser?.type === UserTypes.Admin ||
    contextUser?.type === UserTypes.User
  ) {
    const user = await findUserById(User, contextUser.id);

    if (!user) throw new UserInputError('Bad user data for authentication');

    return {
      type: UserTypes.User,
      user,
    };
  } else if (contextUser?.type === UserTypes.Employee) {
    const employee = await findEmployeeById(Employee, contextUser.id);
    if (!employee) throw new UserInputError('Bad user data for authentication');
    const organization = await findOrganizationById(
      Organization,
      employee.organizationId,
    );
    if (!organization)
      AppError.userInput('such an organization does not exist');

    return {
      type: UserTypes.Employee,
      employee,
    };
  }
  throw new UserInputError('Bad user data for authentication');
};

export const refreshToken: RefreshTokenResolver = async (_, __, { tokens }) => {
  const rTokenVerification = verifyToken<IRefreshToken>(tokens.refresh);
  if (typeof rTokenVerification === 'string')
    return AppError.authentication('Required Sign In', 'NEED_REAUTHENTICATE');

  if (
    rTokenVerification?.type === UserTypes.Admin ||
    rTokenVerification?.type === UserTypes.User
  ) {
    const user = await findUserById(User, rTokenVerification?.id);

    if (!user)
      AppError.authentication('Required Sign In', 'NEED_REAUTHENTICATE');

    const organization = await findOrganizationByOwnerId(
      Organization,
      user?.id as number,
    );

    const rToken = createRefreshToken({
      id: user?.id as number,
      type: rTokenVerification.type,
      system: rTokenVerification.system,
    });
    const token = createSessionToken({
      userId: user?.id as number,
      type: rTokenVerification.type,
      organizationId: organization?.id,
      organizationOwnerId: organization?.ownerId,
      userRole: user?.role,
    });

    return {
      rToken,
      token,
    };
  } else if (rTokenVerification?.type === UserTypes.Employee) {
    const employee = await findEmployeeById(Employee, rTokenVerification.id);
    if (!employee) return AppError.userInput('This account das not exist');

    const organization = await findOrganizationById(
      Organization,
      employee.organizationId,
    );
    if (!organization) AppError.userInput('Your organization das not exist');

    const rToken = createRefreshToken({
      id: employee?.id as number,
      type: UserTypes.Employee,
      system: rTokenVerification.system,
    });
    const token = createSessionToken({
      userId: employee?.id as number,
      type: UserTypes.Employee,
      organizationId: organization?.id,
      organizationOwnerId: organization?.ownerId,
      employeeRole: employee.role,
    });

    return {
      rToken,
      token,
    };
  }

  AppError.unexpected('User role das not exists');
};
