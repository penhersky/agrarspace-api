import { gql } from 'apollo-server-koa';

export default gql`
  type Query {
    singIn(data: SingIn!): AccessResult!
    refreshToken(token: String!): AccessResult!
  }
`;
