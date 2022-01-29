import { gql } from 'apollo-server-koa';

export default gql`
  type Query {
    signIn(data: SignIn!, info: UserDeviceInfo!): SignInResult!
    authenticate: AuthenticateResult!
  }
`;
