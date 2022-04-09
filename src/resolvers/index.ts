import { Resolvers } from '../types/graphql';
import { signIn, authenticate } from './auth';

import { Category, CategoriesQueries } from './category';
import { Organization } from './organization';

import * as statistics from './statistics';

export const resolvers: Resolvers = {
  Query: {
    signIn,
    authenticate,
    ...CategoriesQueries,
    ...statistics,
  },
  Category,
  Organization,
};
