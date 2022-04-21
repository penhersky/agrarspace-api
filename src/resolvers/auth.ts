import { UserInputError } from 'apollo-server-koa';
import {
  User,
  Organization,
  Employee,
  encrypt,
  UserTypes,
} from '@agrarspace/shared';

import {
  AuthenticateResolver,
  SingInResolver,
  SignInToOrganization,
} from '../types/resolvers';
import { findUserByEmail, findUserById } from '../service/user';
import {
  findOrganizationById,
  findOrganizationByOwnerId,
} from '../service/organization';
import {
  findEmployeeByNameAndOrganizationId,
  findEmployeeById,
} from '../service/employee';
import { getToken, verifyToken } from '../utils/token';
import { ERROR, TOKEN } from '../utils/constants';
import { OrganizationError } from '../utils/apolloError';

export const signIn: SingInResolver = async (_, { data, info }) => {
  const user = await findUserByEmail(User, data.email);

  if (!user) throw new UserInputError('Bad user data for authorization');
  if (user.provider !== 'email')
    throw new UserInputError('Bad user authentication provider', {
      argumentName: 'provider',
    });

  const compareResult = await encrypt.compare(
    data.password,
    user.password as string,
  );
  if (!compareResult)
    throw new UserInputError('Bad user data for authorization');

  const token = getToken({ id: user.id, type: user.role, system: info });

  return {
    token,
    expiresIn: 'unlimited',
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

  if (!organization)
    throw new OrganizationError(
      'such an organization does not exist',
      ERROR.NOT_FOUND,
    );

  const user = await findEmployeeByNameAndOrganizationId(
    Employee,
    organization.id,
    data.name,
  );

  if (!user) throw new UserInputError('Bad user data for authorization');
  const compareResult = await encrypt.compare(
    data.password,
    user.password as string,
  );
  if (!compareResult)
    throw new UserInputError('Bad user data for authentication');

  const token = getToken({
    id: user.id,
    type: UserTypes.Employee,
    system: info,
  });

  return {
    token,
    expiresIn: 'unlimited',
  };
};

export const authenticate: AuthenticateResolver = async (_, {}, { tokens }) => {
  const tokenContent = verifyToken(tokens.permanent);
  if (typeof tokenContent === 'string') throw new UserInputError(tokenContent);

  const date = new Date();

  if (
    tokenContent.type === UserTypes.Admin ||
    tokenContent.type === UserTypes.User
  ) {
    const user = await findUserById(User, tokenContent.id);

    if (!user) throw new UserInputError('Bad user data for authentication');

    let token = '';
    let expiresIn = '';
    if (UserTypes.Admin === tokenContent.type) {
      token = getToken(
        { id: user.id, role: user.role },
        TOKEN.ADMIN_SESSION_TOKEN,
      );
      expiresIn = date
        .setMilliseconds(date.getMilliseconds() + TOKEN.ADMIN_SESSION_TOKEN)
        .toString();
    }

    if (UserTypes.User === tokenContent.type) {
      const organization = await findOrganizationByOwnerId(
        Organization,
        tokenContent.id,
      );

      token = getToken(
        { userId: user.id, role: user.role, organizationId: organization?.id },
        TOKEN.USER_SESSION_TOKEN,
      );
      expiresIn = date
        .setMilliseconds(date.getMilliseconds() + TOKEN.USER_SESSION_TOKEN)
        .toString();
    }

    return {
      token,
      expiresIn,
      type: UserTypes.User,
      user,
    };
  } else if (tokenContent.type === UserTypes.Employee) {
    const employee = await findEmployeeById(Employee, tokenContent.id);
    if (!employee) throw new UserInputError('Bad user data for authentication');
    const organization = await findOrganizationById(
      Organization,
      tokenContent.id,
    );
    if (!organization)
      throw new OrganizationError(
        'such an organization does not exist',
        ERROR.NOT_FOUND,
      );

    const token = getToken(
      {
        userId: employee.id,
        userRole: UserTypes.Employee,
        organizationId: organization.id,
        organizationOwnerId: organization.ownerId,
        organizationUserRole: employee.role,
      },
      TOKEN.USER_SESSION_TOKEN,
    );
    const expiresIn = date
      .setMilliseconds(
        date.getMilliseconds() + TOKEN.ORGANIZATION_SESSION_TOKEN,
      )
      .toString();

    return {
      token,
      expiresIn,
      type: UserTypes.Employee,
      employee,
    };
  }
  throw new UserInputError('Bad user data for authentication');
};
