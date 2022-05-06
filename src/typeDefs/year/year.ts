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
`;
