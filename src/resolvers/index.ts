import { Resolvers } from '../types/graphql';
import { singIn, authenticate } from './auth';

export const resolvers: Resolvers = {
  Query: {
    singIn,
    authenticate,
  },
};
