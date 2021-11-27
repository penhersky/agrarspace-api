import { Context } from 'koa';
import { TCategoryModel, TCultureModel, TUserModel } from '@agrarspace/shared';

type Models = {
  Category: TCategoryModel;
  Culture: TCultureModel;
  User: TUserModel;
};

export type IContext = {
  ctx: Context;
  models: Models;
};
