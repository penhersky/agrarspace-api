import { gql } from 'apollo-server-koa';

export default gql`
  type TotalAnnualIncome {
    sumPlanted: Float!
    sumCollected: Float
    year: Int!
  }

  type TotalOrganizationAnnualYearsIncome {
    data: [TotalAnnualIncome]!
    avgCollected: Float
    avgPlanted: Float
    maxCollected: Float
  }

  extend type Query {
    getTotalOrganizationAnnualYearsIncome(
      id: ID!
    ): TotalOrganizationAnnualYearsIncome!
  }
`;
