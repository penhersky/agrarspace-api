import { Resolvers } from '../types/graphql';
import { singIn, authenticate } from './auth';
import { Category, CategoriesQueries } from './category';

export const resolvers: Resolvers = {
  Query: {
    singIn,
    authenticate,
    ...CategoriesQueries,
  },
  Category,
};
