import { gql } from 'apollo-server-koa';

export default gql`
  type Top {
    message: String
  }

  extend type Query {
    getTop: Top!
  }
`;
