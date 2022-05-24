import { gql } from 'apollo-server-koa';

export default gql`
  type Year {
    id: Int!
    plantedArea: Float
    plantedWeight: Float
    collectedWeight: Float
    dateOfSowingStart: String
    dateOfSowingEnd: String
    dateOfCollectionStart: String
    dateOfCollectionEnd: String
    description: String

    culture: Culture
    organization: Organization
    plantation: Plantation

    createdAt: String
    updatedAt: String
  }

  type YearsList {
    data: [YearsListItem]!
    pagination: Pagination!
    option: YearListOption!
  }

  type YearsListItem {
    id: Int!
    areaSize: Float
    plantedArea: Float
    plantedPercent: Float
    plantedWeight: Float
    collectedWeight: Float
    dateOfSowingStart: String
    dateOfSowingEnd: String
    dateOfCollectionStart: String
    dateOfCollectionEnd: String
    plantationId: Int
    plantationName: String
    cultureId: Int
    cultureName: String
    sowingYear: Int
    collectedYear: Int
  }

  type YearListOption {
    areaSize: FilterInterval
    plantedArea: FilterInterval
    plantedWeight: FilterInterval
    collectedWeight: FilterInterval
    dateOfSowingStart: FilterDateInterval
    dateOfSowingEnd: FilterDateInterval
    dateOfCollectionStart: FilterDateInterval
    dateOfCollectionEnd: FilterDateInterval
    culture: [SelectItem]
  }

  input YearsListArgs {
    search: Search
    sort: YearListSort!
    filter: YearListFilter
    pagination: PaginationInput
  }

  enum PlantationsListSortFields {
    plantedArea
    areaSize
    plantedWeight
    collectedWeight
    dateOfSowingStart
    dateOfSowingEnd
    dateOfCollectionStart
    dateOfCollectionEnd
    plantationName
    cultureName
  }

  input YearListSort {
    field: PlantationsListSortFields
    order: SortType
  }

  input YearListFilter {
    areaSize: FilterIntervalInput
    plantedArea: FilterIntervalInput
    plantedWeight: FilterIntervalInput
    collectedWeight: FilterIntervalInput
    dateOfSowingStart: String
    dateOfSowingEnd: String
    dateOfCollectionStart: String
    dateOfCollectionEnd: String
    culture: String
  }

  extend type Query {
    getOrganizationYearsList(data: YearsListArgs!): YearsList!
  }
`;
