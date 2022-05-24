import { gql } from 'apollo-server-koa';

export default gql`
  type PercentSection {
    value: Float!
    name: String
    percent: Float!
  }

  type PercentStatistic {
    data: [PercentSection]!
    totalPercent: Float!
    totalValue: Float!
  }

  extend type Query {
    getOrganizationPlantedAreaPerYear(year: Int!): PercentStatistic!
    getGlobalPlantedAreaPerYear(year: Int!): PercentStatistic!
  }
`;
