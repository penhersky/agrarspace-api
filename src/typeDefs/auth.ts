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

  type AccessResult {
    token: String
    expiresIn: String
  }
`;
