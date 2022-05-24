import { mergeTypeDefs } from '@graphql-tools/merge';

import organization from './organization';
import employee from './employee';

export default mergeTypeDefs([organization, employee]);
