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
    rToken: String
    token: String
    type: UserTypes!
  }

  type AuthenticateResult {
    user: User
    type: UserTypes!
    employee: Employee
  }

  type RefreshTokenResult {
    rToken: String!
    token: String!
  }

  extend type Query {
    signIn(data: SignIn!, info: UserDeviceInfo!): SignInResult!
    signInToOrganization(
      data: SignInOrganization!
      info: UserDeviceInfo!
    ): SignInResult!
    authenticate: AuthenticateResult!
    refreshToken: RefreshTokenResult!
  }

  extend type Mutation {
    signUp(data: SignUp!): Boolean!
    forgotPassword(email: String!): Boolean!
    confirmForgotPassword(token: String!): Boolean!
  }
`;
