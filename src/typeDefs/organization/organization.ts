import { gql } from 'apollo-server-koa';

export default gql`
  type Organization {
    id: Int!
    name: String!
    owner: User!
    description: String
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    getMyOrganization: Organization! # owner or organization member
  }

  extend type Mutation {
    updateOrganizationName(name: String!): String # only owner
  }
`;
