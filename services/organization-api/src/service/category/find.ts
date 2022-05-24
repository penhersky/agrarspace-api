import { TCategoryModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const findAllCategories = async (Model: TCategoryModel) => {
  try {
    return await Model.findAll({});
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
