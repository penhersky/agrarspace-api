import { gql } from 'apollo-server-koa';

export default gql`
  type Category {
    id: Int!
    name: String!
    image: String
    color: String
    icon: String
    description: String
    cultures: [Culture]
    createdAt: String
    updatedAt: String
  }

  input InputCategory {
    name: String!
    image: String
    color: String
    icon: String
    description: String
  }

  extend type Query {
    getCategories: [Category]! @cacheControl(maxAge: 7200)
  }

  extend type Mutation {
    createCategory(category: InputCategory!): Category! @auth(role: ADMIN)
    updateCategory(id: ID!, category: InputCategory!): Category!
      @auth(role: ADMIN)
  }
`;
