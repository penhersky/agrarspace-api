import {
  QuerySignInArgs,
  QuerySignInToOrganizationArgs,
  SignInResult,
  AuthenticateResult,
  User,
  Category,
  TopCultureItem,
  Organization,
  OrganizationGeneralInfo,
  QueryGetOrganizationGeneralInfoArgs,
  TotalOrganizationAnnualYearsIncome,
  QueryGetTotalOrganizationAnnualYearsIncomeArgs,
  PercentStatistic,
  QueryGetOrganizationPlantedAreaPerYearArgs,
  QueryGetGlobalPlantedAreaPerYearArgs,
  RefreshTokenResult,
} from './graphql';
import { IResolver, IResolverReturnArray } from '.';

// auth
export type SingInResolver = IResolver<SignInResult, QuerySignInArgs>;
export type SignInToOrganization = IResolver<
  SignInResult,
  QuerySignInToOrganizationArgs
>;
export type AuthenticateResolver = IResolver<AuthenticateResult, {}>;
export type RefreshTokenResolver = IResolver<RefreshTokenResult | any, {}>;

// user
export type GetMeResolver = IResolver<User, {}>;

// category
export type GetCategoriesResolver = IResolverReturnArray<Category, {}>;

// statistics
export type GetTopCultureResolver = IResolverReturnArray<TopCultureItem, {}>;
export type GetTotalOrganizationAnnualYearsIncome = IResolver<
  TotalOrganizationAnnualYearsIncome,
  QueryGetTotalOrganizationAnnualYearsIncomeArgs
>;
export type GetOrganizationPlantedAreaPerYearResolver = IResolver<
  PercentStatistic,
  QueryGetOrganizationPlantedAreaPerYearArgs
>;
export type GetGlobalPlantedAreaPerYearResolver = IResolver<
  PercentStatistic,
  QueryGetGlobalPlantedAreaPerYearArgs
>;

// organization
export type GetMyOrganizationResolver = IResolver<Organization, {}>;
export type GetOrganizationGeneralInfoResolver = IResolver<
  OrganizationGeneralInfo,
  QueryGetOrganizationGeneralInfoArgs
>;
