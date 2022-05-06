import { UserRoles, EmployeeRoles, UserTypes } from '@agrarspace/shared';
import { gql } from 'apollo-server-koa';

export default gql`
  input UserDeviceInfo {
    os: String
    browser: String
    details: String
  }

  enum UserRoles {
    ${Object.values(UserRoles).join(' ').toLowerCase()}
  }

  enum UserTypes {
    ${Object.values(UserTypes).join(' ').toLowerCase()}
  }

  enum EmployeeRoles {
    ${Object.values(EmployeeRoles).join(' ').toLowerCase()}
  }

  type Id {
    id: Int!
  }

  input IId {
    id: ID!
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
  ) on FIELD_DEFINITION | OBJECT | INTERFACE
`;
