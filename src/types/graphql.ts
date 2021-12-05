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
  expiresIn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user: User;
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
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreateUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

export type Culture = {
  __typename?: 'Culture';
  category: Category;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
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
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: Scalars['Boolean'];
  createCategory: Category;
  createCulture: Culture;
  forgotPassword: Scalars['Boolean'];
  singUp: Scalars['Boolean'];
  updateCategory: Category;
  updateCulture: Culture;
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


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSingUpArgs = {
  data: SingUp;
};


export type MutationUpdateCategoryArgs = {
  category: InputCategory;
  id: Scalars['ID'];
};


export type MutationUpdateCultureArgs = {
  category: InputCulture;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  user: UpdateUser;
};

export type Query = {
  __typename?: 'Query';
  authenticate: AuthenticateResult;
  getCategories: Array<Maybe<Category>>;
  getCulturesByCategoryId: Array<Maybe<Culture>>;
  getMe: User;
  getUser: User;
  singIn: SingInResult;
};


export type QueryGetCulturesByCategoryIdArgs = {
  categoryId: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QuerySingInArgs = {
  data: SingIn;
  info: UserDeviceInfo;
};

export type SingIn = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SingInResult = {
  __typename?: 'SingInResult';
  expiresIn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type SingUp = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserDeviceInfo = {
  browser?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  os?: InputMaybe<Scalars['String']>;
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
  CreateUser: CreateUser;
  Culture: ResolverTypeWrapper<Culture>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SingIn: SingIn;
  SingInResult: ResolverTypeWrapper<SingInResult>;
  SingUp: SingUp;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUser: UpdateUser;
  User: ResolverTypeWrapper<User>;
  UserDeviceInfo: UserDeviceInfo;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticateResult: AuthenticateResult;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CreateUser: CreateUser;
  Culture: Culture;
  ID: Scalars['ID'];
  InputCategory: InputCategory;
  InputCulture: InputCulture;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  SingIn: SingIn;
  SingInResult: SingInResult;
  SingUp: SingUp;
  String: Scalars['String'];
  UpdateUser: UpdateUser;
  User: User;
  UserDeviceInfo: UserDeviceInfo;
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthenticateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateResult'] = ResolversParentTypes['AuthenticateResult']> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cultures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Culture']>>>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  confirmForgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConfirmForgotPasswordArgs, 'token'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'category'>>;
  createCulture?: Resolver<ResolversTypes['Culture'], ParentType, ContextType, RequireFields<MutationCreateCultureArgs, 'category'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  singUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSingUpArgs, 'data'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'category' | 'id'>>;
  updateCulture?: Resolver<ResolversTypes['Culture'], ParentType, ContextType, RequireFields<MutationUpdateCultureArgs, 'category' | 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticate?: Resolver<ResolversTypes['AuthenticateResult'], ParentType, ContextType>;
  getCategories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  getCulturesByCategoryId?: Resolver<Array<Maybe<ResolversTypes['Culture']>>, ParentType, ContextType, RequireFields<QueryGetCulturesByCategoryIdArgs, 'categoryId'>>;
  getMe?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  singIn?: Resolver<ResolversTypes['SingInResult'], ParentType, ContextType, RequireFields<QuerySingInArgs, 'data' | 'info'>>;
};

export type SingInResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingInResult'] = ResolversParentTypes['SingInResult']> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticateResult?: AuthenticateResultResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Culture?: CultureResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SingInResult?: SingInResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
