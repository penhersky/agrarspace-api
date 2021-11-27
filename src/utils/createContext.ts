import { Category, Culture, User } from '@agrarspace/shared';

import { IContext } from '../types';

export const apolloContext = (ctx: IContext) => ({
  ctx,
  Models: {
    Category,
    Culture,
    User,
  },
});
