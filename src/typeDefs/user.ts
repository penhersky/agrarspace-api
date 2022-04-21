import { gql } from 'apollo-server-koa';

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    role: UserRoles!
    provider: String!
    createdAt: String
    updatedAt: String
  }

  input CreateUser {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    provider: String!
  }

  input UpdateUser {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
  }

  extend type Query {
    getMe: User! @auth
    getUser(id: ID!): User! @auth
  }

  extend type Mutation {
    updateUser(user: UpdateUser!): User
  }
`;
