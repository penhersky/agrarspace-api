import { TCultureModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const findCulturesByCategoryId = async (
  Model: TCultureModel,
  id: string | number,
) => {
  try {
    return await Model.findAll({
      where: {
        categoryId: id,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
