import { Context } from 'koa';
import { TCategory, TCulture, TUser } from '@agrarspace/shared';

type Models = {
  Category: TCategory;
  Culture: TCulture;
  User: TUser;
};

export type IContext = {
  ctx: Context;
  models: Models;
};
