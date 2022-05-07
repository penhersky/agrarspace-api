import { gql } from 'apollo-server-core';

export default gql`
  input Search {
    value: String
  }

  enum SortType {
    ASC
    DESC
  }

  type FilterInterval {
    min: Int
    max: Int
  }

  type FilterDateInterval {
    start: String
    end: String
  }

  input FilterIntervalInput {
    min: Int
    max: Int
  }

  type SelectItem {
    key: String
    label: String
  }
`;
