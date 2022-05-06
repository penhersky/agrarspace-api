import { Resolvers } from '../types/graphql';
import {
  signIn,
  signInToOrganization,
  authenticate,
  refreshToken,
} from './auth';

import { Category, CategoriesQueries } from './category';
import { Organization, OrganizationQueries } from './organization';
import {
  PlantationQueries,
  PlantationMutation,
  Plantation,
} from './plantation';

import * as statistics from './statistics';

export const resolvers: Resolvers = {
  Query: {
    signIn,
    signInToOrganization,
    authenticate,
    refreshToken,
    ...CategoriesQueries,
    ...statistics,
    ...OrganizationQueries,
    ...PlantationQueries,
  },
  Mutation: {
    ...PlantationMutation,
  },
  Category,
  Organization,
  Plantation,
};
