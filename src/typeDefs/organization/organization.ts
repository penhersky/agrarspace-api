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

  type OrganizationGeneralInfo {
    plantationsCount: Int
    totalAreaSize: Float
    plantedResources: Float
    collectedResources: Float
    countOfCultures: Int
    countOfEmployees: Int
  }

  input OrganizationGeneralInfoArgs {
    id: ID!
    year: Int
  }

  extend type Query {
    getMyOrganization: Organization! # owner or organization member
    getOrganizationGeneralInfo(
      data: OrganizationGeneralInfoArgs!
    ): OrganizationGeneralInfo! # authenticated user
  }

  extend type Mutation {
    updateOrganizationName(name: String!): String # only owner
  }
`;
