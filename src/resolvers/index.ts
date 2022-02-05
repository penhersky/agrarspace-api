import { Resolvers } from '../types/graphql';
import { signIn, authenticate } from './auth';
import { Category, CategoriesQueries } from './category';
import { TopQueries } from './statistics';

export const resolvers: Resolvers = {
  Query: {
    signIn,
    authenticate,
    ...CategoriesQueries,
    ...TopQueries,
  },
  Category,
};
