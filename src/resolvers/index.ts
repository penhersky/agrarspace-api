import { Resolvers } from '../types/graphql';
import { signIn, signInToOrganization, authenticate } from './auth';

import { Category, CategoriesQueries } from './category';
import { Organization, OrganizationQueries } from './organization';

import * as statistics from './statistics';

export const resolvers: Resolvers = {
  Query: {
    signIn,
    signInToOrganization,
    authenticate,
    ...CategoriesQueries,
    ...statistics,
    ...OrganizationQueries,
  },
  Category,
  Organization,
};
