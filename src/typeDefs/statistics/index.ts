import { mergeTypeDefs } from '@graphql-tools/merge';

import getTopCultures from './getTopCultures';

export default mergeTypeDefs([getTopCultures]);
