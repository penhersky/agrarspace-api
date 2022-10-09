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

  input PaginatedSelectSuggestionsInput {
    value: String
    limit: Int = 7
  }

  type PaginatedSelectSuggestionsResult {
    totalItemCount: Int!
    filteredItemCount: Int!
  }
`;
