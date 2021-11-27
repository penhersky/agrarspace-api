import { ResolverTypeWrapper, ResolverFn, RequireFields } from './graphql';

import { IContext } from './graphqlContext';

export { IContext } from './graphqlContext';

/**
 * Default template for Apollo Graphql Resolver
 * @param IResult
 * @param TArgs
 */
export type IResolver<Result, Args> = ResolverFn<
  ResolverTypeWrapper<Result>,
  {},
  IContext,
  RequireFields<Args, keyof Args>
>;
