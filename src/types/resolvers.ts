import {
  QuerySingInArgs,
  SingInResult,
  AuthenticateResult,
  User,
  Category,
} from './graphql';
import { IResolver, IResolverReturnArray } from '.';

// auth
export type SingInResolver = IResolver<SingInResult, QuerySingInArgs>;
export type AuthenticateResolver = IResolver<AuthenticateResult, {}>;

// user
export type GetMeResolver = IResolver<User, {}>;

// category
export type GetCategoriesResolver = IResolverReturnArray<Category, {}>;
