import { gql } from 'apollo-server-koa';

export default gql`
  type Employee {
    id: Int!
    name: String!
    position: String
    role: EmployeeRoles!
    organization: Organization
    createdAt: String
    updatedAt: String
  }

  input CreateEmployee {
    name: String!
    position: String
    role: EmployeeRoles!
    tempPassword: String!
  }

  input UpdateEmployee {
    name: String!
    position: String
  }

  type EmployeeList {
    data: [Employee]!
    pagination: Pagination!
  }

  input EmployeeListArgs {
    search: Search
    sort: EmployeeListSort!
    filter: EmployeeListFilter
    pagination: PaginationInput
  }

  enum EmployeeListSortFields {
    name
    position
    role
  }

  input EmployeeListSort {
    field: EmployeeListSortFields
    order: SortType
  }

  input EmployeeListFilter {
    role: EmployeeRoles
  }

  extend type Query {
    getMyEmployeeProfile: Employee! # owner
    getOrganizationEmployeesList(data: EmployeeListArgs!): EmployeeList! # organization members
  }

  extend type Mutation {
    createEmployee(employee: CreateEmployee!): String # organization owner or director
    updateEmployeeRole(role: String!): String # organization owner or director
    updateEmployeeDetails(employee: UpdateEmployee!): String # organization owner or director
    updatePassword(oldPassword: String!, newPassword: String!): String # self employee
  }
`;
