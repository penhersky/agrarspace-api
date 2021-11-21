import { gql } from 'apollo-server-koa';

export default gql`
  type Mutation {
    singUp(data: SingUp!): Boolean!
    forgotPassword(email: String!): Boolean!
    confirmForgotPassword(token: String!): Boolean!
  }
`;
