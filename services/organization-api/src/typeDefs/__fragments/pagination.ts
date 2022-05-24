import { gql } from 'apollo-server-core';

export default gql`
  type Pagination {
    totalItemCount: Int!
    totalPagesCount: Int!
    itemCountPerPage: Int!
    currentPage: Int!
  }

  input PaginationInput {
    page: Int = 1
    itemCountPerPage: Int = 10
  }
`;
