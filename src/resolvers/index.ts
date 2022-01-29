import { Resolvers } from '../types/graphql';
import { signIn, authenticate } from './auth';
import { Category, CategoriesQueries } from './category';

export const resolvers: Resolvers = {
  Query: {
    signIn,
    authenticate,
    ...CategoriesQueries,
  },
  Category,
};
