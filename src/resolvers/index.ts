import { Resolvers } from '../types/graphql';
import { singIn } from './auth';

export const resolvers: Resolvers = {
  Query: {
    singIn,
  },
};
