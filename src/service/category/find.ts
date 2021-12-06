import { TCategoryModel } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const findAllCategories = async (Model: TCategoryModel) => {
  try {
    return await Model.findAll({});
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
