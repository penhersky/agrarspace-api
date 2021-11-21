import { QuerySingInArgs, AccessResult } from '../types/graphql';
import { IResolver } from '../types';

export const singIn: IResolver<AccessResult, QuerySingInArgs> = (
  parent,
  args,
) => {
  console.log(args, parent);
  return {
    token: '',
    expiresIn: '',
  };
};
