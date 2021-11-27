import { QuerySingInArgs, AccessResult } from './graphql';
import { IResolver } from '.';

// auth
export type SingInResolver = IResolver<AccessResult, QuerySingInArgs>;
