import { gql } from 'apollo-server-koa';

export default gql`
  type TopCultureItem {
    id: Int!
    name: String!
    data: StandardCoordinates!
  }

  extend type Query {
    getTopCulturesByYield: [TopCultureItem]!
  }
`;
