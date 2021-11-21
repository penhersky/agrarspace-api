import { Context } from 'koa';

import { ResolverTypeWrapper, ResolverFn, RequireFields } from './graphql';

interface IContext {
  ctx: Context;
}

export type IResolver<Result, Args> = ResolverFn<
  ResolverTypeWrapper<Result>,
  {},
  IContext,
  RequireFields<Args, keyof Args>
>;
