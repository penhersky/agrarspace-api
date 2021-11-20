import { gql } from 'apollo-server-koa';
import { mergeTypeDefs } from '@graphql-tools/merge';

import user from './user';

const temp = gql`
  type Query {
    hello: String
  }
`;

export default mergeTypeDefs([user, temp]);
