import { Context } from 'koa';
import { UserRoles } from '@agrarspace/shared';

import { verifyToken } from '../service/token.service';
import { ISessionToken } from '../types/token';

export const apolloContext = (ctx: Context) => {
  const sessionToken = ctx.ctx.request.headers['x-user-session-token-x'];
  const adminToken = ctx.ctx.request.headers['x-admin-session-token-x'];
  const refreshToken = ctx.ctx.request.headers['x-r-token-x'];
  const session = sessionToken ? verifyToken<ISessionToken>(sessionToken) : '';
  const adminSession = adminToken ? verifyToken<ISessionToken>(adminToken) : '';

  const user =
    typeof session !== 'string'
      ? {
          id: session.userId,
          type: session.type,
          isAdmin:
            typeof adminSession !== 'string' &&
            session.userRole === UserRoles.Admin,
          isOrganizationMember: !!session.userRole,
          isOrganizationOwner: session.organizationOwnerId === session.userId,
          organizationId: session.organizationId,
          organizationUserRole: session.employeeRole,
        }
      : null;

  return {
    ctx,
    user,
    tokens: {
      refresh: refreshToken,
      user: sessionToken,
      admin: adminToken,
    },
  };
};
