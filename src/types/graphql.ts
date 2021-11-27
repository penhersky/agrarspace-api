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

export type AccessResult = {
  __typename?: 'AccessResult';
  expiresIn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  singUp: Scalars['Boolean'];
  updateUser?: Maybe<User>;
};


export type MutationConfirmForgotPasswordArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSingUpArgs = {
  data: SingUp;
};


export type MutationUpdateUserArgs = {
  user: UpdateUser;
};

export type Query = {
  __typename?: 'Query';
  getMe: User;
  getUser: User;
  refreshToken: AccessResult;
  singIn: AccessResult;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryRefreshTokenArgs = {
  token: Scalars['String'];
};


export type QuerySingInArgs = {
  data: SingIn;
};

export type SingIn = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  updatedAt: Scalars['String'];
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
  AccessResult: ResolverTypeWrapper<AccessResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUser: CreateUser;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SingIn: SingIn;
  SingUp: SingUp;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUser: UpdateUser;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessResult: AccessResult;
  Boolean: Scalars['Boolean'];
  CreateUser: CreateUser;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  SingIn: SingIn;
  SingUp: SingUp;
  String: Scalars['String'];
  UpdateUser: UpdateUser;
  User: User;
};

export type AccessResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessResult'] = ResolversParentTypes['AccessResult']> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  confirmForgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationConfirmForgotPasswordArgs, 'token'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  singUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSingUpArgs, 'data'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMe?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  refreshToken?: Resolver<ResolversTypes['AccessResult'], ParentType, ContextType, RequireFields<QueryRefreshTokenArgs, 'token'>>;
  singIn?: Resolver<ResolversTypes['AccessResult'], ParentType, ContextType, RequireFields<QuerySingInArgs, 'data'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessResult?: AccessResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
