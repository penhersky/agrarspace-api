import { QuerySingInArgs, SingInResult, AuthenticateResult } from './graphql';
import { IResolver } from '.';

// auth
export type SingInResolver = IResolver<SingInResult, QuerySingInArgs>;
export type AuthenticateResolver = IResolver<AuthenticateResult, {}>;
