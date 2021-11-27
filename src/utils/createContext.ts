import { Category, Culture, User } from '@agrarspace/shared';
import { Context } from 'koa';

export const apolloContext = (ctx: Context) => ({
  ctx,
  tokens: {
    permanent: ctx.ctx.request.headers['x-token-permanent-x'],
    session: ctx.ctx.request.headers['x-token-session-x'],
    admin: ctx.ctx.request.headers['x-token-admin-x'],
  },
  Models: {
    Category,
    Culture,
    User,
  },
});
