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
    min: Float
    max: Float
  }

  type FilterDateInterval {
    start: String
    end: String
  }

  input FilterIntervalInput {
    min: Float
    max: Float
  }

  type SelectItem {
    key: String
    label: String
  }
`;
