import { gql } from 'apollo-server-koa';

export default gql`
  type Culture {
    id: Int!
    name: String!
    image: String
    description: String
    category: Category!
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  input InputCulture {
    name: String!
    categoryId: ID!
    image: String
    color: String
    icon: String
    description: String
  }

  extend type Query {
    getCulturesByCategoryId(categoryId: ID!): [Culture]!
  }

  extend type Mutation {
    createCulture(category: InputCulture!): Culture!
    updateCulture(id: ID!, category: InputCulture!): Culture!
  }
`;
