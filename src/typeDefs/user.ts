import { gql } from 'apollo-server-koa';

export default gql`
  type User {
    id: Int!
    name: String!
    email: String!
    phoneNumber: String
    provider: String!
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  input CreateUser {
    name: String!
    email: String!
    phoneNumber: String
    provider: String!
  }

  input UpdateUser {
    name: String!
    email: String!
    phoneNumber: String
  }

  extend type Query {
    getMe: User!
    getUser(id: ID!): User!
  }

  extend type Mutation {
    updateUser(user: UpdateUser!): User
  }
`;
