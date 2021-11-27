import { SingInResolver } from '../types/resolvers';

export const singIn: SingInResolver = async (_, { data }) => {
  console.log(data);
  return {
    token: '',
    expiresIn: '',
  };
};
