import { mergeTypeDefs } from '@graphql-tools/merge';

import getTopCultures from './getTopCultures';
import getTotalAnnualIncome from './getTotalAnnualIncome';

export default mergeTypeDefs([getTopCultures, getTotalAnnualIncome]);
