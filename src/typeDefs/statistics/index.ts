import { mergeTypeDefs } from '@graphql-tools/merge';

import getTopCultures from './getTopCultures';
import getTotalAnnualIncome from './getTotalAnnualIncome';
import getPercentStatistic from './getPercentStatistic';

export default mergeTypeDefs([
  getTopCultures,
  getTotalAnnualIncome,
  getPercentStatistic,
]);
