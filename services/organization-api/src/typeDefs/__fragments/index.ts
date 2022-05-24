import { mergeTypeDefs } from '@graphql-tools/merge';

import statistics from './statistics';
import filter from './filter';
import pagination from './pagination';

export default mergeTypeDefs([statistics, filter, pagination]);
