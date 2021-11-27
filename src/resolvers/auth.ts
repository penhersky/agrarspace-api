import { UserInputError } from 'apollo-server-koa';
import { User } from '@agrarspace/shared';

import { SingInResolver } from '../types/resolvers';
import { findUserByEmail } from '../service/user';
// import { verifyToken } from '../utils/token';

export const singIn: SingInResolver = async (_, { data }) => {
  const user = await findUserByEmail(User, data.email);

  if (!user) throw new UserInputError('Bad user data for authentication');
  if (user.provider !== 'email')
    throw new UserInputError('Bad user authentication provider', {
      argumentName: 'provider',
    });

  return {
    token: '',
    expiresIn: '',
  };
};
