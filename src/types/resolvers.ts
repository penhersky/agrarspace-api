import {
  QuerySignInArgs,
  SignInResult,
  AuthenticateResult,
  User,
  Category,
  Top,
} from './graphql';
import { IResolver, IResolverReturnArray } from '.';

// auth
export type SingInResolver = IResolver<SignInResult, QuerySignInArgs>;
export type AuthenticateResolver = IResolver<AuthenticateResult, {}>;

// user
export type GetMeResolver = IResolver<User, {}>;

// category
export type GetCategoriesResolver = IResolverReturnArray<Category, {}>;

// statistics
export type GetTopResolver = IResolver<Top, {}>;
