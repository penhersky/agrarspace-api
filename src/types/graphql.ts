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
  expiresIn: Scalars['String'];
  token: Scalars['String'];
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

export enum EmployeeRoles {
  Director = 'director',
  Manager = 'manager',
  Worker = 'worker'
}

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
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  updatedAt?: Maybe<Scalars['String']>;
};

export type OrganizationGeneralInfo = {
  __typename?: 'OrganizationGeneralInfo';
  collectedResources?: Maybe<Scalars['Int']>;
  countOfCultures?: Maybe<Scalars['Int']>;
  countOfEmployees?: Maybe<Scalars['Int']>;
  plantationsCount?: Maybe<Scalars['Int']>;
  plantedResources?: Maybe<Scalars['Int']>;
  totalAreaSize?: Maybe<Scalars['Int']>;
};

export type OrganizationGeneralInfoArgs = {
  id: Scalars['ID'];
  year?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  authenticate: AuthenticateResult;
  getCategories: Array<Maybe<Category>>;
  getCulturesByCategoryId: Array<Maybe<Culture>>;
  getEmployees: Employee;
  getMe: User;
  getMyEmployeeProfile: Employee;
  getMyOrganization: Organization;
  getOrganizationGeneralInfo: OrganizationGeneralInfo;
  getTopCulturesByYield: Array<Maybe<TopCultureItem>>;
  getUser: User;
  signIn: SignInResult;
  signInToOrganization: SignInResult;
};


export type QueryGetCulturesByCategoryIdArgs = {
  categoryId: Scalars['ID'];
};


export type QueryGetOrganizationGeneralInfoArgs = {
  data: OrganizationGeneralInfoArgs;
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
  expiresIn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type: UserTypes;
};

export type SignUp = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

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
  EmployeeRoles: EmployeeRoles;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationGeneralInfo: ResolverTypeWrapper<OrganizationGeneralInfo>;
  OrganizationGeneralInfoArgs: OrganizationGeneralInfoArgs;
  Query: ResolverTypeWrapper<{}>;
  SignIn: SignIn;
  SignInOrganization: SignInOrganization;
  SignInResult: ResolverTypeWrapper<SignInResult>;
  SignUp: SignUp;
  StandardCoordinates: ResolverTypeWrapper<StandardCoordinates>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TopCultureItem: ResolverTypeWrapper<TopCultureItem>;
  UpdateEmployee: UpdateEmployee;
  UpdateUser: UpdateUser;
  User: ResolverTypeWrapper<User>;
  UserDeviceInfo: UserDeviceInfo;
  UserRoles: UserRoles;
  UserTypes: UserTypes;
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
  ID: Scalars['ID'];
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: Scalars['Int'];
  Mutation: {};
  Organization: Organization;
  OrganizationGeneralInfo: OrganizationGeneralInfo;
  OrganizationGeneralInfoArgs: OrganizationGeneralInfoArgs;
  Query: {};
  SignIn: SignIn;
  SignInOrganization: SignInOrganization;
  SignInResult: SignInResult;
  SignUp: SignUp;
  StandardCoordinates: StandardCoordinates;
  String: Scalars['String'];
  TopCultureItem: TopCultureItem;
  UpdateEmployee: UpdateEmployee;
  UpdateUser: UpdateUser;
  User: User;
  UserDeviceInfo: UserDeviceInfo;
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
  expiresIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  confirmForgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConfirmForgotPasswordArgs, 'token'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'category'>>;
  createCulture?: Resolver<ResolversTypes['Culture'], ParentType, ContextType, RequireFields<MutationCreateCultureArgs, 'category'>>;
  createEmployee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'employee'>>;
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
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationGeneralInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationGeneralInfo'] = ResolversParentTypes['OrganizationGeneralInfo']> = {
  collectedResources?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countOfCultures?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countOfEmployees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plantationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plantedResources?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalAreaSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticate?: Resolver<ResolversTypes['AuthenticateResult'], ParentType, ContextType>;
  getCategories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  getCulturesByCategoryId?: Resolver<Array<Maybe<ResolversTypes['Culture']>>, ParentType, ContextType, RequireFields<QueryGetCulturesByCategoryIdArgs, 'categoryId'>>;
  getEmployees?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  getMe?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getMyEmployeeProfile?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  getMyOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  getOrganizationGeneralInfo?: Resolver<ResolversTypes['OrganizationGeneralInfo'], ParentType, ContextType, RequireFields<QueryGetOrganizationGeneralInfoArgs, 'data'>>;
  getTopCulturesByYield?: Resolver<Array<Maybe<ResolversTypes['TopCultureItem']>>, ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  signIn?: Resolver<ResolversTypes['SignInResult'], ParentType, ContextType, RequireFields<QuerySignInArgs, 'data' | 'info'>>;
  signInToOrganization?: Resolver<ResolversTypes['SignInResult'], ParentType, ContextType, RequireFields<QuerySignInToOrganizationArgs, 'data' | 'info'>>;
};

export type SignInResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInResult'] = ResolversParentTypes['SignInResult']> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = {
  AuthenticateResult?: AuthenticateResultResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Culture?: CultureResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationGeneralInfo?: OrganizationGeneralInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResult?: SignInResultResolvers<ContextType>;
  StandardCoordinates?: StandardCoordinatesResolvers<ContextType>;
  TopCultureItem?: TopCultureItemResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
