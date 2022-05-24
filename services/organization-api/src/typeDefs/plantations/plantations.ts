import { gql } from 'apollo-server-koa';

export default gql`
  type Plantation {
    id: Int!
    name: String
    status: String
    areaSize: Float
    region: String
    description: String
    organization: Organization
    years: [Year]
    currentYear: Year
    createdAt: String
    updatedAt: String
    # areaPoints: [PlantationAreaPoint]
  }

  input PlantationInput {
    name: String!
    status: String
    areaSize: Float!
    region: String!
    description: String
  }

  type PlantationsList {
    data: [Plantation]!
    pagination: Pagination!
    option: PlantationListOption!
  }

  type PlantationListOption {
    statuses: [SelectItem]
    areaSize: FilterInterval
  }

  input PlantationListArgs {
    search: Search
    sort: PlantationsListSort!
    filter: PlantationsListFilter
    pagination: PaginationInput
  }

  enum PlantationsListSortFields {
    name
    status
    areaSize
    region
    updatedAt
  }

  input PlantationsListSort {
    field: PlantationsListSortFields
    order: SortType
  }

  input PlantationsListFilter {
    status: String
    areaSize: FilterIntervalInput
  }

  extend type Query {
    getOrganizationPlantationList(data: PlantationListArgs!): PlantationsList!
  }

  extend type Mutation {
    createPlantation(data: PlantationInput!): Id
    deletePlantation(id: ID!): Id
  }
`;
