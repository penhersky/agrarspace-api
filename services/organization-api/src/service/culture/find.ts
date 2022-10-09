import { TCultureModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const findCulturesWithParentNullByCategoryId = async (
  Model: TCultureModel,
  id: string | number,
) => {
  try {
    return await Model.findAll({
      where: {
        parentId: null,
        categoryId: id,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const findCulturesByParentId = async (
  Model: TCultureModel,
  id: string | number,
) => {
  try {
    return await Model.findAll({
      where: {
        parentId: id,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
