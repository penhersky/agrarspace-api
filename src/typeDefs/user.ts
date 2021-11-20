import { gql } from 'apollo-server-koa';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phoneNumber: String
    provider: String!
    createdAt: String!
    updatedAt: String!
    deletedAt: String
  }

  input CreateUser {
    name: String!
    email: String!
    phoneNumber: String
    provider: String!
  }
`;
