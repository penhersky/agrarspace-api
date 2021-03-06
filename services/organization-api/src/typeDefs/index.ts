import { mergeTypeDefs } from '@graphql-tools/merge';

import user from './user';
import category from './category';
import culture from './culture';
import auth from './auth';

import __global from './__global';
import __fragments from './__fragments';

import statistics from './statistics';
import organization from './organization';
import plantations from './plantations';
import year from './year';

import Mutation from './Mutation';
import Query from './Query';

export default mergeTypeDefs([
  Query,
  Mutation,
  __global,
  __fragments,
  auth,
  user,
  category,
  culture,
  statistics,
  organization,
  plantations,
  year,
]);
