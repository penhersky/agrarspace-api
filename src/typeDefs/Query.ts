import { gql } from 'apollo-server-koa';

export default gql`
  type Query {
    singIn(data: SingIn!, info: UserDeviceInfo!): SingInResult!
    authenticate: AuthenticateResult!
  }
`;
