import { gql } from 'apollo-server-koa';

export default gql`
  type Culture {
    id: Int!
    name: String!
    image: String
    description: String
    category: Category!
    subcultures: [Culture]
    createdAt: String
    updatedAt: String
  }

  input InputCulture {
    name: String!
    categoryId: ID!
    parentId: ID
    image: String
    color: String
    icon: String
    description: String
  }

  extend type Query {
    getCulturesByCategoryId(categoryId: ID!): [Culture]!
  }

  extend type Mutation {
    createCulture(category: InputCulture!): Culture! @auth(role: ADMIN)
    updateCulture(id: ID!, category: InputCulture!): Culture! @auth(role: ADMIN)
  }
`;
