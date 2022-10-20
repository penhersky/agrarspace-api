import { gql } from 'apollo-server-koa';

export default gql`
  type OrganizationUsedCulturesPerYearItem {
    count: Int!
    culture: Culture!
  }

  extend type Query {
    getOrganizationUsedCulturesPerYear(
      year: Int!
    ): [OrganizationUsedCulturesPerYearItem]! @cacheControl(maxAge: 2400)
  }
`;
