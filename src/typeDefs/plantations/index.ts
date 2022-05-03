import { mergeTypeDefs } from '@graphql-tools/merge';

import plantations from './plantations';

export default mergeTypeDefs([plantations]);
