import { mergeTypeDefs } from '@graphql-tools/merge';

import user from './user';
import auth from './auth';

import global from './global';

import Mutation from './Mutation';
import Query from './Query';

export default mergeTypeDefs([Query, Mutation, global, auth, user]);
