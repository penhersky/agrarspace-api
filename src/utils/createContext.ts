import { Context } from 'koa';

import { verifyToken } from '../utils/token';

export const apolloContext = (ctx: Context) => {
  const sessionToken = ctx.ctx.request.headers['x-token-session-x'];
  const adminToken = ctx.ctx.request.headers['x-token-admin-x'];
  const session = sessionToken ? verifyToken(sessionToken) : '';
  const adminSession = adminToken ? verifyToken(adminToken) : '';

  const user =
    typeof session !== 'string'
      ? {
          id: session.userId,
          isAdmin: typeof adminSession !== 'string',
          isOrganizationMember: !!session.userRole,
          isOrganizationOwner: session.organizationOwnerId === session.userId,
          organizationId: session.organizationId,
          organizationUserRole: session.organizationUserRole,
        }
      : null;

  return {
    ctx,
    user,
    tokens: {
      permanent: ctx.ctx.request.headers['x-token-permanent-x'],
      session: sessionToken,
      admin: adminToken,
    },
  };
};
