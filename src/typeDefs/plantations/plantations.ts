import { gql } from 'apollo-server-koa';

export default gql`
  type Plantation {
    id: Int!
    status: String
    areaSize: Float
    region: String
    description: String
    organization: Organization
    # years: [Year]
    # currentYears: Year
    createdAt: String
    updatedAt: String
    # areaPoints: [PlantationAreaPoint]
  }

  type PlantationListItem {
    id: Int!
    status: String
    areaSize: Float
    plantedArea: Float
    region: String
    cultureId: Int
    cultureName: String
    updatedAt: String
  }

  type PlantationsList {
    data: [PlantationListItem]!
    pagination: Pagination!
    option: PlantationListOption!
  }

  type PlantationListOption {
    status: [SelectItem]!
    areaSize: FilterInterval!
    plantedArea: FilterInterval!
    culture: [SelectItem]!
  }

  input PlantationListFilter {
    search: Search!
    sort: PlantationsListSort
    filter: PlantationsListFilter
    pagination: PaginationInput
  }

  enum PlantationsListSortFields {
    status
    areaSize
    plantedArea
    region
    cultureName
    updatedAt
  }

  input PlantationsListSort {
    field: PlantationsListSortFields
    order: SortType
  }

  input PlantationsListFilter {
    status: String
    areaSize: FilterIntervalInput
    plantedArea: FilterIntervalInput
    culture: ID
  }

  extend type Query {
    getOrganizationPlantationList(data: PlantationListFilter!): PlantationsList!
  }
`;
