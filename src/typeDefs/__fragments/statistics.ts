import { gql } from 'apollo-server-core';

export default gql`
  type StandardCoordinates {
    x: String!
    y: String!
  }
`;
