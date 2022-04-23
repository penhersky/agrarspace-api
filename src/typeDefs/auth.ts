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

  input SignInOrganization {
    organizationId: Int!
    name: String!
    password: String!
  }

  type SignInResult {
    token: String
    expiresIn: String
    type: UserTypes!
  }

  type AuthenticateResult {
    token: String!
    expiresIn: String!
    user: User
    type: UserTypes!
    employee: Employee
  }
`;
