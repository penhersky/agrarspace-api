import { UserInputError } from 'apollo-server-koa';
import { User, encrypt } from '@agrarspace/shared';

import { SingInResolver } from '../types/resolvers';
import { findUserByEmail } from '../service/user';
import { getToken } from '../utils/token';

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
    token: token,
    expiresIn: 'unlimited',
  };
};
