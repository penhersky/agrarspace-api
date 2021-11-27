import { gql } from 'apollo-server-koa';

export default gql`
  input UserDeviceInfo {
    os: String
    browser: String
    details: String
  }
`;
