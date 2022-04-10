import { UserRoles, EmployeeRoles } from '@agrarspace/shared';
import { gql } from 'apollo-server-koa';

export default gql`
  input UserDeviceInfo {
    os: String
    browser: String
    details: String
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  enum UserRoles {
    ${Object.values(UserRoles).join(' ').toLowerCase()}
  }

  enum EmployeeRoles {
    ${Object.values(EmployeeRoles).join(' ').toLowerCase()}
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
  ) on FIELD_DEFINITION | OBJECT | INTERFACE
`;
