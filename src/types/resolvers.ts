import {
  QuerySingInArgs,
  SingInResult,
  AuthenticateResult,
  User,
} from './graphql';
import { IResolver } from '.';

// auth
export type SingInResolver = IResolver<SingInResult, QuerySingInArgs>;
export type AuthenticateResolver = IResolver<AuthenticateResult, {}>;

// user
export type GetMeResolver = IResolver<User, {}>;
