import { SingInResolver } from '../types/resolvers';

export const singIn: SingInResolver = (_, { data }) => {
  return {
    token: '',
    expiresIn: '',
  };
};
