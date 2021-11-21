import { mergeTypeDefs } from '@graphql-tools/merge';

import user from './user';
import auth from './auth';

import Mutation from './Mutation';
import Query from './Query';

export default mergeTypeDefs([Query, Mutation, auth, user]);
