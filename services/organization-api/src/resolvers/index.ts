import { Resolvers } from '../types/graphql';
import {
  signUp,
  signIn,
  signInToOrganization,
  authenticate,
  refreshToken,
} from './auth';

import { Category, CategoriesQueries } from './category';
import { Culture } from './culture';
import { Organization, OrganizationQueries } from './organization';
import { EmployeeQuery, Employee } from './employee';
import {
  PlantationQueries,
  PlantationMutation,
  Plantation,
} from './plantation';
import { YearQuery } from './year';

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
    ...EmployeeQuery,
    ...PlantationQueries,
    ...YearQuery,
  },
  Mutation: {
    signUp,
    ...PlantationMutation,
  },
  Category,
  Culture,
  Organization,
  Employee,
  Plantation,
};
