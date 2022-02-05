import { mergeTypeDefs } from '@graphql-tools/merge';

import user from './user';
import category from './category';
import culture from './culture';
import auth from './auth';

import global from './global';

import statistics from './statistics';

import Mutation from './Mutation';
import Query from './Query';

export default mergeTypeDefs([
  Query,
  Mutation,
  global,
  auth,
  user,
  category,
  culture,
  statistics,
]);
