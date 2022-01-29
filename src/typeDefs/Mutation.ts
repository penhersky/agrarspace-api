import { gql } from 'apollo-server-koa';

export default gql`
  type Mutation {
    signUp(data: SignUp!): Boolean!
    forgotPassword(email: String!): Boolean!
    confirmForgotPassword(token: String!): Boolean!
  }
`;
