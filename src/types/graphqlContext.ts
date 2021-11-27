import { TCategoryModel, TCultureModel, TUserModel } from '@agrarspace/shared';

type Models = {
  Category: TCategoryModel;
  Culture: TCultureModel;
  User: TUserModel;
};

type Tokens = {
  permanent: string;
  session: string;
  admin: string;
};

export type IContext = {
  models: Models;
  tokens: Tokens;
};
