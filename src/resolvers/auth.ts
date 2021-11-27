import { SingInResolver } from '../types/resolvers';

export const singIn: SingInResolver = (parent, args) => {
  console.log(args, parent);
  return {
    token: '',
    expiresIn: '',
  };
};
