import { gql } from 'apollo-server-koa';

export default gql`
  input SignUp {
    name: String!
    email: String!
    password: String!
  }

  input SignIn {
    email: String!
    password: String!
  }

  type SignInResult {
    token: String
    expiresIn: String
  }

  type AuthenticateResult {
    token: String
    expiresIn: String
    user: User!
  }
`;
