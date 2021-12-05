import { Resolvers } from '../types/graphql';
import { singIn, authenticate } from './auth';
import { Category } from './category';

export const resolvers: Resolvers = {
  Query: {
    singIn,
    authenticate,
  },
  Category,
};
