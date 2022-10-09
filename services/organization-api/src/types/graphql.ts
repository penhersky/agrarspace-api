import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticateResult = {
  __typename?: 'AuthenticateResult';
  employee?: Maybe<Employee>;
  type: UserTypes;
  user?: Maybe<User>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Category = {
  __typename?: 'Category';
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  cultures?: Maybe<Array<Maybe<Culture>>>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreateEmployee = {
  name: Scalars['String'];
  position?: InputMaybe<Scalars['String']>;
  role: EmployeeRoles;
  tempPassword: Scalars['String'];
};

export type CreateUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

export type Culture = {
  __typename?: 'Culture';
  category: Category;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subcultures?: Maybe<Array<Maybe<Category>>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Employee = {
  __typename?: 'Employee';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  position?: Maybe<Scalars['String']>;
  role: EmployeeRoles;
  updatedAt?: Maybe<Scalars['String']>;
};

export type EmployeeList = {
  __typename?: 'EmployeeList';
  data: Array<Maybe<Employee>>;
  pagination: Pagination;
};

export type EmployeeListArgs = {
  filter?: InputMaybe<EmployeeListFilter>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Search>;
  sort: EmployeeListSort;
};

export type EmployeeListFilter = {
  role?: InputMaybe<EmployeeRoles>;
};

export type EmployeeListSort = {
  field?: InputMaybe<EmployeeListSortFields>;
  order?: InputMaybe<SortType>;
};

export enum EmployeeListSortFields {
  Name = 'name',
  Position = 'position',
  Role = 'role'
}

export enum EmployeeRoles {
  Director = 'director',
  Manager = 'manager',
  Worker = 'worker'
}

export type FilterDateInterval = {
  __typename?: 'FilterDateInterval';
  end?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};

export type FilterInterval = {
  __typename?: 'FilterInterval';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export type FilterIntervalInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type IId = {
  id: Scalars['ID'];
};

export type Id = {
  __typename?: 'Id';
  id: Scalars['Int'];
};

export type InputCategory = {
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type InputCulture = {
  categoryId: Scalars['ID'];
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: Scalars['Boolean'];
  createCategory: Category;
  createCulture: Culture;
  createEmployee?: Maybe<Scalars['String']>;
  createPlantation?: Maybe<Id>;
  deletePlantation?: Maybe<Id>;
  forgotPassword: Scalars['Boolean'];
  signUp: Scalars['Boolean'];
  updateCategory: Category;
  updateCulture: Culture;
  updateEmployeeDetails?: Maybe<Scalars['String']>;
  updateEmployeeRole?: Maybe<Scalars['String']>;
  updateOrganizationName?: Maybe<Scalars['String']>;
  updatePassword?: Maybe<Scalars['String']>;
  updateUser?: Maybe<User>;
};


export type MutationConfirmForgotPasswordArgs = {
  token: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  category: InputCategory;
};


export type MutationCreateCultureArgs = {
  category: InputCulture;
};


export type MutationCreateEmployeeArgs = {
  employee: CreateEmployee;
};


export type MutationCreatePlantationArgs = {
  data: PlantationInput;
};


export type MutationDeletePlantationArgs = {
  id: Scalars['ID'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSignUpArgs = {
  data: SignUp;
};


export type MutationUpdateCategoryArgs = {
  category: InputCategory;
  id: Scalars['ID'];
};


export type MutationUpdateCultureArgs = {
  category: InputCulture;
  id: Scalars['ID'];
};


export type MutationUpdateEmployeeDetailsArgs = {
  employee: UpdateEmployee;
};


export type MutationUpdateEmployeeRoleArgs = {
  role: Scalars['String'];
};


export type MutationUpdateOrganizationNameArgs = {
  name: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  user: UpdateUser;
};

export type Organization = {
  __typename?: 'Organization';
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  updatedAt?: Maybe<Scalars['String']>;
};

export type OrganizationGeneralInfo = {
  __typename?: 'OrganizationGeneralInfo';
  collectedResources?: Maybe<Scalars['Float']>;
  countOfCultures?: Maybe<Scalars['Int']>;
  countOfEmployees?: Maybe<Scalars['Int']>;
  plantationsCount?: Maybe<Scalars['Int']>;
  plantedResources?: Maybe<Scalars['Float']>;
  totalAreaSize?: Maybe<Scalars['Float']>;
};

export type OrganizationGeneralInfoArgs = {
  id: Scalars['ID'];
  year?: InputMaybe<Scalars['Int']>;
};

export type PaginatedSelectSuggestionsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type PaginatedSelectSuggestionsResult = {
  __typename?: 'PaginatedSelectSuggestionsResult';
  filteredItemCount: Scalars['Int'];
  totalItemCount: Scalars['Int'];
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Int'];
  itemCountPerPage: Scalars['Int'];
  totalItemCount: Scalars['Int'];
  totalPagesCount: Scalars['Int'];
};

export type PaginationInput = {
  itemCountPerPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type PercentSection = {
  __typename?: 'PercentSection';
  name?: Maybe<Scalars['String']>;
  percent: Scalars['Float'];
  value: Scalars['Float'];
};

export type PercentStatistic = {
  __typename?: 'PercentStatistic';
  data: Array<Maybe<PercentSection>>;
  totalPercent: Scalars['Float'];
  totalValue: Scalars['Float'];
};

export type Plantation = {
  __typename?: 'Plantation';
  areaSize?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  currentYear?: Maybe<Year>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  region?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  years?: Maybe<Array<Maybe<Year>>>;
};

export type PlantationInput = {
  areaSize: Scalars['Float'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  region: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};

export type PlantationListArgs = {
  filter?: InputMaybe<PlantationsListFilter>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Search>;
  sort: PlantationsListSort;
};

export type PlantationListOption = {
  __typename?: 'PlantationListOption';
  areaSize?: Maybe<FilterInterval>;
  statuses?: Maybe<Array<Maybe<SelectItem>>>;
};

export type PlantationsList = {
  __typename?: 'PlantationsList';
  data: Array<Maybe<Plantation>>;
  option: PlantationListOption;
  pagination: Pagination;
};

export type PlantationsListFilter = {
  areaSize?: InputMaybe<FilterIntervalInput>;
  status?: InputMaybe<Scalars['String']>;
};

export type PlantationsListSort = {
  field?: InputMaybe<PlantationsListSortFields>;
  order?: InputMaybe<SortType>;
};

export enum PlantationsListSortFields {
  AreaSize = 'areaSize',
  CollectedWeight = 'collectedWeight',
  CultureName = 'cultureName',
  DateOfCollectionEnd = 'dateOfCollectionEnd',
  DateOfCollectionStart = 'dateOfCollectionStart',
  DateOfSowingEnd = 'dateOfSowingEnd',
  DateOfSowingStart = 'dateOfSowingStart',
  Name = 'name',
  PlantationName = 'plantationName',
  PlantedArea = 'plantedArea',
  PlantedWeight = 'plantedWeight',
  Region = 'region',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type PlantationsSelectSuggestionsResult = {
  __typename?: 'PlantationsSelectSuggestionsResult';
  dataset: Array<Maybe<SelectItem>>;
  pagination: PaginatedSelectSuggestionsResult;
};

export type Query = {
  __typename?: 'Query';
  authenticate: AuthenticateResult;
  getCategories: Array<Maybe<Category>>;
  getCulturesByCategoryId: Array<Maybe<Culture>>;
  getGlobalPlantedAreaPerYear: PercentStatistic;
  getMe: User;
  getMyEmployeeProfile: Employee;
  getMyOrganization: Organization;
  getOrganizationEmployeesList: EmployeeList;
  getOrganizationGeneralInfo: OrganizationGeneralInfo;
  getOrganizationPlantationList: PlantationsList;
  getOrganizationPlantationSelectSuggestionsList: PlantationsSelectSuggestionsResult;
  getOrganizationPlantedAreaPerYear: PercentStatistic;
  getOrganizationYearsList: YearsList;
  getTopCulturesByYield: Array<Maybe<TopCultureItem>>;
  getTotalOrganizationAnnualYearsIncome: TotalOrganizationAnnualYearsIncome;
  getUser: User;
  refreshToken: RefreshTokenResult;
  signIn: SignInResult;
  signInToOrganization: SignInResult;
};


export type QueryGetCulturesByCategoryIdArgs = {
  categoryId: Scalars['ID'];
};


export type QueryGetGlobalPlantedAreaPerYearArgs = {
  year: Scalars['Int'];
};


export type QueryGetOrganizationEmployeesListArgs = {
  data: EmployeeListArgs;
};


export type QueryGetOrganizationGeneralInfoArgs = {
  data: OrganizationGeneralInfoArgs;
};


export type QueryGetOrganizationPlantationListArgs = {
  data: PlantationListArgs;
};


export type QueryGetOrganizationPlantationSelectSuggestionsListArgs = {
  data: PaginatedSelectSuggestionsInput;
};


export type QueryGetOrganizationPlantedAreaPerYearArgs = {
  year: Scalars['Int'];
};


export type QueryGetOrganizationYearsListArgs = {
  data: YearsListArgs;
};


export type QueryGetTotalOrganizationAnnualYearsIncomeArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QuerySignInArgs = {
  data: SignIn;
  info: UserDeviceInfo;
};


export type QuerySignInToOrganizationArgs = {
  data: SignInOrganization;
  info: UserDeviceInfo;
};

export type RefreshTokenResult = {
  __typename?: 'RefreshTokenResult';
  rToken: Scalars['String'];
  token: Scalars['String'];
};

export type Search = {
  value?: InputMaybe<Scalars['String']>;
};

export type SelectItem = {
  __typename?: 'SelectItem';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SignIn = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInOrganization = {
  name: Scalars['String'];
  organizationId: Scalars['Int'];
  password: Scalars['String'];
};

export type SignInResult = {
  __typename?: 'SignInResult';
  rToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: UserTypes;
};

export type SignUp = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StandardCoordinates = {
  __typename?: 'StandardCoordinates';
  x: Scalars['String'];
  y: Scalars['String'];
};

export type TopCultureItem = {
  __typename?: 'TopCultureItem';
  data: StandardCoordinates;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TotalAnnualIncome = {
  __typename?: 'TotalAnnualIncome';
  sumCollected?: Maybe<Scalars['Float']>;
  sumPlanted: Scalars['Float'];
  year: Scalars['Int'];
};

export type TotalOrganizationAnnualYearsIncome = {
  __typename?: 'TotalOrganizationAnnualYearsIncome';
  avgCollected?: Maybe<Scalars['Float']>;
  avgPlanted?: Maybe<Scalars['Float']>;
  data: Array<Maybe<TotalAnnualIncome>>;
  maxValue?: Maybe<Scalars['Float']>;
};

export type UpdateEmployee = {
  name: Scalars['String'];
  position?: InputMaybe<Scalars['String']>;
};

export type UpdateUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role: UserRoles;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserDeviceInfo = {
  browser?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  os?: InputMaybe<Scalars['String']>;
};

export enum UserRoles {
  Admin = 'admin',
  User = 'user'
}

export enum UserTypes {
  Admin = 'admin',
  Employee = 'employee',
  User = 'user'
}

export type Year = {
  __typename?: 'Year';
  collectedWeight?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  culture?: Maybe<Culture>;
  dateOfCollectionEnd?: Maybe<Scalars['String']>;
  dateOfCollectionStart?: Maybe<Scalars['String']>;
  dateOfSowingEnd?: Maybe<Scalars['String']>;
  dateOfSowingStart?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  organization?: Maybe<Organization>;
  plantation?: Maybe<Plantation>;
  plantedArea?: Maybe<Scalars['Float']>;
  plantedWeight?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type YearListFilter = {
  areaSize?: InputMaybe<FilterIntervalInput>;
  collectedWeight?: InputMaybe<FilterIntervalInput>;
  culture?: InputMaybe<Scalars['String']>;
  dateOfCollectionEnd?: InputMaybe<Scalars['String']>;
  dateOfCollectionStart?: InputMaybe<Scalars['String']>;
  dateOfSowingEnd?: InputMaybe<Scalars['String']>;
  dateOfSowingStart?: InputMaybe<Scalars['String']>;
  plantedArea?: InputMaybe<FilterIntervalInput>;
  plantedWeight?: InputMaybe<FilterIntervalInput>;
};

export type YearListOption = {
  __typename?: 'YearListOption';
  areaSize?: Maybe<FilterInterval>;
  collectedWeight?: Maybe<FilterInterval>;
  culture?: Maybe<Array<Maybe<SelectItem>>>;
  dateOfCollectionEnd?: Maybe<FilterDateInterval>;
  dateOfCollectionStart?: Maybe<FilterDateInterval>;
  dateOfSowingEnd?: Maybe<FilterDateInterval>;
  dateOfSowingStart?: Maybe<FilterDateInterval>;
  plantedArea?: Maybe<FilterInterval>;
  plantedWeight?: Maybe<FilterInterval>;
};

export type YearListSort = {
  field?: InputMaybe<PlantationsListSortFields>;
  order?: InputMaybe<SortType>;
};

export type YearsList = {
  __typename?: 'YearsList';
  data: Array<Maybe<YearsListItem>>;
  option: YearListOption;
  pagination: Pagination;
};

export type YearsListArgs = {
  filter?: InputMaybe<YearListFilter>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Search>;
  sort: YearListSort;
};

export type YearsListItem = {
  __typename?: 'YearsListItem';
  areaSize?: Maybe<Scalars['Float']>;
  collectedWeight?: Maybe<Scalars['Float']>;
  collectedYear?: Maybe<Scalars['Int']>;
  cultureId?: Maybe<Scalars['Int']>;
  cultureName?: Maybe<Scalars['String']>;
  dateOfCollectionEnd?: Maybe<Scalars['String']>;
  dateOfCollectionStart?: Maybe<Scalars['String']>;
  dateOfSowingEnd?: Maybe<Scalars['String']>;
  dateOfSowingStart?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  plantationId?: Maybe<Scalars['Int']>;
  plantationName?: Maybe<Scalars['String']>;
  plantedArea?: Maybe<Scalars['Float']>;
  plantedPercent?: Maybe<Scalars['Float']>;
  plantedWeight?: Maybe<Scalars['Float']>;
  sowingYear?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticateResult: ResolverTypeWrapper<AuthenticateResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  Category: ResolverTypeWrapper<Category>;
  CreateEmployee: CreateEmployee;
  CreateUser: CreateUser;
  Culture: ResolverTypeWrapper<Culture>;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeList: ResolverTypeWrapper<EmployeeList>;
  EmployeeListArgs: EmployeeListArgs;
  EmployeeListFilter: EmployeeListFilter;
  EmployeeListSort: EmployeeListSort;
  EmployeeListSortFields: EmployeeListSortFields;
  EmployeeRoles: EmployeeRoles;
  FilterDateInterval: ResolverTypeWrapper<FilterDateInterval>;
  FilterInterval: ResolverTypeWrapper<FilterInterval>;
  FilterIntervalInput: FilterIntervalInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IId: IId;
  Id: ResolverTypeWrapper<Id>;
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationGeneralInfo: ResolverTypeWrapper<OrganizationGeneralInfo>;
  OrganizationGeneralInfoArgs: OrganizationGeneralInfoArgs;
  PaginatedSelectSuggestionsInput: PaginatedSelectSuggestionsInput;
  PaginatedSelectSuggestionsResult: ResolverTypeWrapper<PaginatedSelectSuggestionsResult>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationInput: PaginationInput;
  PercentSection: ResolverTypeWrapper<PercentSection>;
  PercentStatistic: ResolverTypeWrapper<PercentStatistic>;
  Plantation: ResolverTypeWrapper<Plantation>;
  PlantationInput: PlantationInput;
  PlantationListArgs: PlantationListArgs;
  PlantationListOption: ResolverTypeWrapper<PlantationListOption>;
  PlantationsList: ResolverTypeWrapper<PlantationsList>;
  PlantationsListFilter: PlantationsListFilter;
  PlantationsListSort: PlantationsListSort;
  PlantationsListSortFields: PlantationsListSortFields;
  PlantationsSelectSuggestionsResult: ResolverTypeWrapper<PlantationsSelectSuggestionsResult>;
  Query: ResolverTypeWrapper<{}>;
  RefreshTokenResult: ResolverTypeWrapper<RefreshTokenResult>;
  Search: Search;
  SelectItem: ResolverTypeWrapper<SelectItem>;
  SignIn: SignIn;
  SignInOrganization: SignInOrganization;
  SignInResult: ResolverTypeWrapper<SignInResult>;
  SignUp: SignUp;
  SortType: SortType;
  StandardCoordinates: ResolverTypeWrapper<StandardCoordinates>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TopCultureItem: ResolverTypeWrapper<TopCultureItem>;
  TotalAnnualIncome: ResolverTypeWrapper<TotalAnnualIncome>;
  TotalOrganizationAnnualYearsIncome: ResolverTypeWrapper<TotalOrganizationAnnualYearsIncome>;
  UpdateEmployee: UpdateEmployee;
  UpdateUser: UpdateUser;
  User: ResolverTypeWrapper<User>;
  UserDeviceInfo: UserDeviceInfo;
  UserRoles: UserRoles;
  UserTypes: UserTypes;
  Year: ResolverTypeWrapper<Year>;
  YearListFilter: YearListFilter;
  YearListOption: ResolverTypeWrapper<YearListOption>;
  YearListSort: YearListSort;
  YearsList: ResolverTypeWrapper<YearsList>;
  YearsListArgs: YearsListArgs;
  YearsListItem: ResolverTypeWrapper<YearsListItem>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticateResult: AuthenticateResult;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CreateEmployee: CreateEmployee;
  CreateUser: CreateUser;
  Culture: Culture;
  Employee: Employee;
  EmployeeList: EmployeeList;
  EmployeeListArgs: EmployeeListArgs;
  EmployeeListFilter: EmployeeListFilter;
  EmployeeListSort: EmployeeListSort;
  FilterDateInterval: FilterDateInterval;
  FilterInterval: FilterInterval;
  FilterIntervalInput: FilterIntervalInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IId: IId;
  Id: Id;
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: Scalars['Int'];
  Mutation: {};
  Organization: Organization;
  OrganizationGeneralInfo: OrganizationGeneralInfo;
  OrganizationGeneralInfoArgs: OrganizationGeneralInfoArgs;
  PaginatedSelectSuggestionsInput: PaginatedSelectSuggestionsInput;
  PaginatedSelectSuggestionsResult: PaginatedSelectSuggestionsResult;
  Pagination: Pagination;
  PaginationInput: PaginationInput;
  PercentSection: PercentSection;
  PercentStatistic: PercentStatistic;
  Plantation: Plantation;
  PlantationInput: PlantationInput;
  PlantationListArgs: PlantationListArgs;
  PlantationListOption: PlantationListOption;
  PlantationsList: PlantationsList;
  PlantationsListFilter: PlantationsListFilter;
  PlantationsListSort: PlantationsListSort;
  PlantationsSelectSuggestionsResult: PlantationsSelectSuggestionsResult;
  Query: {};
  RefreshTokenResult: RefreshTokenResult;
  Search: Search;
  SelectItem: SelectItem;
  SignIn: SignIn;
  SignInOrganization: SignInOrganization;
  SignInResult: SignInResult;
  SignUp: SignUp;
  StandardCoordinates: StandardCoordinates;
  String: Scalars['String'];
  TopCultureItem: TopCultureItem;
  TotalAnnualIncome: TotalAnnualIncome;
  TotalOrganizationAnnualYearsIncome: TotalOrganizationAnnualYearsIncome;
  UpdateEmployee: UpdateEmployee;
  UpdateUser: UpdateUser;
  User: User;
  UserDeviceInfo: UserDeviceInfo;
  Year: Year;
  YearListFilter: YearListFilter;
  YearListOption: YearListOption;
  YearListSort: YearListSort;
  YearsList: YearsList;
  YearsListArgs: YearsListArgs;
  YearsListItem: YearsListItem;
};

export type AuthDirectiveArgs = {
  role?: Maybe<UserRoles>;
};

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthenticateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateResult'] = ResolversParentTypes['AuthenticateResult']> = {
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['UserTypes'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cultures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Culture']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CultureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Culture'] = ResolversParentTypes['Culture']> = {
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subcultures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['EmployeeRoles'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeList'] = ResolversParentTypes['EmployeeList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Employee']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterDateIntervalResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilterDateInterval'] = ResolversParentTypes['FilterDateInterval']> = {
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterIntervalResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilterInterval'] = ResolversParentTypes['FilterInterval']> = {
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Id'] = ResolversParentTypes['Id']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  confirmForgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConfirmForgotPasswordArgs, 'token'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'category'>>;
  createCulture?: Resolver<ResolversTypes['Culture'], ParentType, ContextType, RequireFields<MutationCreateCultureArgs, 'category'>>;
  createEmployee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'employee'>>;
  createPlantation?: Resolver<Maybe<ResolversTypes['Id']>, ParentType, ContextType, RequireFields<MutationCreatePlantationArgs, 'data'>>;
  deletePlantation?: Resolver<Maybe<ResolversTypes['Id']>, ParentType, ContextType, RequireFields<MutationDeletePlantationArgs, 'id'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  signUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'data'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'category' | 'id'>>;
  updateCulture?: Resolver<ResolversTypes['Culture'], ParentType, ContextType, RequireFields<MutationUpdateCultureArgs, 'category' | 'id'>>;
  updateEmployeeDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateEmployeeDetailsArgs, 'employee'>>;
  updateEmployeeRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateEmployeeRoleArgs, 'role'>>;
  updateOrganizationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationNameArgs, 'name'>>;
  updatePassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'newPassword' | 'oldPassword'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationGeneralInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationGeneralInfo'] = ResolversParentTypes['OrganizationGeneralInfo']> = {
  collectedResources?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  countOfCultures?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countOfEmployees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plantationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plantedResources?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalAreaSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSelectSuggestionsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSelectSuggestionsResult'] = ResolversParentTypes['PaginatedSelectSuggestionsResult']> = {
  filteredItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemCountPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPagesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PercentSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PercentSection'] = ResolversParentTypes['PercentSection']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PercentStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['PercentStatistic'] = ResolversParentTypes['PercentStatistic']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['PercentSection']>>, ParentType, ContextType>;
  totalPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plantation'] = ResolversParentTypes['Plantation']> = {
  areaSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentYear?: Resolver<Maybe<ResolversTypes['Year']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  years?: Resolver<Maybe<Array<Maybe<ResolversTypes['Year']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantationListOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlantationListOption'] = ResolversParentTypes['PlantationListOption']> = {
  areaSize?: Resolver<Maybe<ResolversTypes['FilterInterval']>, ParentType, ContextType>;
  statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantationsListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlantationsList'] = ResolversParentTypes['PlantationsList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Plantation']>>, ParentType, ContextType>;
  option?: Resolver<ResolversTypes['PlantationListOption'], ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantationsSelectSuggestionsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlantationsSelectSuggestionsResult'] = ResolversParentTypes['PlantationsSelectSuggestionsResult']> = {
  dataset?: Resolver<Array<Maybe<ResolversTypes['SelectItem']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['PaginatedSelectSuggestionsResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticate?: Resolver<ResolversTypes['AuthenticateResult'], ParentType, ContextType>;
  getCategories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  getCulturesByCategoryId?: Resolver<Array<Maybe<ResolversTypes['Culture']>>, ParentType, ContextType, RequireFields<QueryGetCulturesByCategoryIdArgs, 'categoryId'>>;
  getGlobalPlantedAreaPerYear?: Resolver<ResolversTypes['PercentStatistic'], ParentType, ContextType, RequireFields<QueryGetGlobalPlantedAreaPerYearArgs, 'year'>>;
  getMe?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getMyEmployeeProfile?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  getMyOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  getOrganizationEmployeesList?: Resolver<ResolversTypes['EmployeeList'], ParentType, ContextType, RequireFields<QueryGetOrganizationEmployeesListArgs, 'data'>>;
  getOrganizationGeneralInfo?: Resolver<ResolversTypes['OrganizationGeneralInfo'], ParentType, ContextType, RequireFields<QueryGetOrganizationGeneralInfoArgs, 'data'>>;
  getOrganizationPlantationList?: Resolver<ResolversTypes['PlantationsList'], ParentType, ContextType, RequireFields<QueryGetOrganizationPlantationListArgs, 'data'>>;
  getOrganizationPlantationSelectSuggestionsList?: Resolver<ResolversTypes['PlantationsSelectSuggestionsResult'], ParentType, ContextType, RequireFields<QueryGetOrganizationPlantationSelectSuggestionsListArgs, 'data'>>;
  getOrganizationPlantedAreaPerYear?: Resolver<ResolversTypes['PercentStatistic'], ParentType, ContextType, RequireFields<QueryGetOrganizationPlantedAreaPerYearArgs, 'year'>>;
  getOrganizationYearsList?: Resolver<ResolversTypes['YearsList'], ParentType, ContextType, RequireFields<QueryGetOrganizationYearsListArgs, 'data'>>;
  getTopCulturesByYield?: Resolver<Array<Maybe<ResolversTypes['TopCultureItem']>>, ParentType, ContextType>;
  getTotalOrganizationAnnualYearsIncome?: Resolver<ResolversTypes['TotalOrganizationAnnualYearsIncome'], ParentType, ContextType, RequireFields<QueryGetTotalOrganizationAnnualYearsIncomeArgs, 'id'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  refreshToken?: Resolver<ResolversTypes['RefreshTokenResult'], ParentType, ContextType>;
  signIn?: Resolver<ResolversTypes['SignInResult'], ParentType, ContextType, RequireFields<QuerySignInArgs, 'data' | 'info'>>;
  signInToOrganization?: Resolver<ResolversTypes['SignInResult'], ParentType, ContextType, RequireFields<QuerySignInToOrganizationArgs, 'data' | 'info'>>;
};

export type RefreshTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshTokenResult'] = ResolversParentTypes['RefreshTokenResult']> = {
  rToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectItem'] = ResolversParentTypes['SelectItem']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInResult'] = ResolversParentTypes['SignInResult']> = {
  rToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['UserTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandardCoordinatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardCoordinates'] = ResolversParentTypes['StandardCoordinates']> = {
  x?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopCultureItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopCultureItem'] = ResolversParentTypes['TopCultureItem']> = {
  data?: Resolver<ResolversTypes['StandardCoordinates'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalAnnualIncomeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalAnnualIncome'] = ResolversParentTypes['TotalAnnualIncome']> = {
  sumCollected?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sumPlanted?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalOrganizationAnnualYearsIncomeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalOrganizationAnnualYearsIncome'] = ResolversParentTypes['TotalOrganizationAnnualYearsIncome']> = {
  avgCollected?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgPlanted?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['TotalAnnualIncome']>>, ParentType, ContextType>;
  maxValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRoles'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YearResolvers<ContextType = any, ParentType extends ResolversParentTypes['Year'] = ResolversParentTypes['Year']> = {
  collectedWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  culture?: Resolver<Maybe<ResolversTypes['Culture']>, ParentType, ContextType>;
  dateOfCollectionEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfCollectionStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfSowingEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfSowingStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  plantation?: Resolver<Maybe<ResolversTypes['Plantation']>, ParentType, ContextType>;
  plantedArea?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  plantedWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YearListOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['YearListOption'] = ResolversParentTypes['YearListOption']> = {
  areaSize?: Resolver<Maybe<ResolversTypes['FilterInterval']>, ParentType, ContextType>;
  collectedWeight?: Resolver<Maybe<ResolversTypes['FilterInterval']>, ParentType, ContextType>;
  culture?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectItem']>>>, ParentType, ContextType>;
  dateOfCollectionEnd?: Resolver<Maybe<ResolversTypes['FilterDateInterval']>, ParentType, ContextType>;
  dateOfCollectionStart?: Resolver<Maybe<ResolversTypes['FilterDateInterval']>, ParentType, ContextType>;
  dateOfSowingEnd?: Resolver<Maybe<ResolversTypes['FilterDateInterval']>, ParentType, ContextType>;
  dateOfSowingStart?: Resolver<Maybe<ResolversTypes['FilterDateInterval']>, ParentType, ContextType>;
  plantedArea?: Resolver<Maybe<ResolversTypes['FilterInterval']>, ParentType, ContextType>;
  plantedWeight?: Resolver<Maybe<ResolversTypes['FilterInterval']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YearsListResolvers<ContextType = any, ParentType extends ResolversParentTypes['YearsList'] = ResolversParentTypes['YearsList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['YearsListItem']>>, ParentType, ContextType>;
  option?: Resolver<ResolversTypes['YearListOption'], ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YearsListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['YearsListItem'] = ResolversParentTypes['YearsListItem']> = {
  areaSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  collectedWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  collectedYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cultureId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cultureName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfCollectionEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfCollectionStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfSowingEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfSowingStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  plantationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plantationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plantedArea?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  plantedPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  plantedWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sowingYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticateResult?: AuthenticateResultResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Culture?: CultureResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  EmployeeList?: EmployeeListResolvers<ContextType>;
  FilterDateInterval?: FilterDateIntervalResolvers<ContextType>;
  FilterInterval?: FilterIntervalResolvers<ContextType>;
  Id?: IdResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationGeneralInfo?: OrganizationGeneralInfoResolvers<ContextType>;
  PaginatedSelectSuggestionsResult?: PaginatedSelectSuggestionsResultResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  PercentSection?: PercentSectionResolvers<ContextType>;
  PercentStatistic?: PercentStatisticResolvers<ContextType>;
  Plantation?: PlantationResolvers<ContextType>;
  PlantationListOption?: PlantationListOptionResolvers<ContextType>;
  PlantationsList?: PlantationsListResolvers<ContextType>;
  PlantationsSelectSuggestionsResult?: PlantationsSelectSuggestionsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefreshTokenResult?: RefreshTokenResultResolvers<ContextType>;
  SelectItem?: SelectItemResolvers<ContextType>;
  SignInResult?: SignInResultResolvers<ContextType>;
  StandardCoordinates?: StandardCoordinatesResolvers<ContextType>;
  TopCultureItem?: TopCultureItemResolvers<ContextType>;
  TotalAnnualIncome?: TotalAnnualIncomeResolvers<ContextType>;
  TotalOrganizationAnnualYearsIncome?: TotalOrganizationAnnualYearsIncomeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Year?: YearResolvers<ContextType>;
  YearListOption?: YearListOptionResolvers<ContextType>;
  YearsList?: YearsListResolvers<ContextType>;
  YearsListItem?: YearsListItemResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
