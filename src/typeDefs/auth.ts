import { gql } from 'apollo-server-koa';

export default gql`
  input SingUp {
    name: String!
    email: String!
    password: String!
  }

  input SingIn {
    email: String!
    password: String!
  }

  type SingInResult {
    token: String
    expiresIn: String
  }

  type AuthenticateResult {
    token: String
    expiresIn: String
    user: User!
  }
`;
