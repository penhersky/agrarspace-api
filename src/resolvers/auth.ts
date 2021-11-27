import { UserInputError } from 'apollo-server-koa';
import { User, encrypt } from '@agrarspace/shared';

import { AuthenticateResolver, SingInResolver } from '../types/resolvers';
import { findUserByEmail, findUserById } from '../service/user';
import { getToken, verifyToken } from '../utils/token';

export const singIn: SingInResolver = async (_, { data, info }) => {
  const user = await findUserByEmail(User, data.email);

  if (!user) throw new UserInputError('Bad user data for authentication');
  if (user.provider !== 'email')
    throw new UserInputError('Bad user authentication provider', {
      argumentName: 'provider',
    });

  const compareResult = await encrypt.compare(
    data.password,
    user.password as string,
  );
  if (!compareResult)
    throw new UserInputError('Bad user data for authentication');

  const token = getToken({ id: user.id, email: user.email, system: info });

  return {
    token,
    expiresIn: 'unlimited',
  };
};

export const authenticate: AuthenticateResolver = async (_, {}, { tokens }) => {
  const tokenContent = verifyToken(tokens.permanent);
  if (typeof tokenContent === 'string') throw new UserInputError(tokenContent);

  const user = await findUserById(User, 1);
  if (!user) throw new UserInputError('Bad user data for authentication');

  return {
    token: '',
    expiresIn: 'unlimited',
    user,
  };
};
