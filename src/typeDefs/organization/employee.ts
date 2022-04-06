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

  extend type Query {
    getMyEmployeeProfile: Employee! # owner
    getEmployees: Employee! # organization members
  }

  extend type Mutation {
    createEmployee(employee: CreateEmployee!): String # organization owner or director
    updateEmployeeRole(role: String!): String # organization owner or director
    updateEmployeeDetails(employee: UpdateEmployee!): String # organization owner or director
    updatePassword(oldPassword: String!, newPassword: String!): String # self employee
  }
`;
