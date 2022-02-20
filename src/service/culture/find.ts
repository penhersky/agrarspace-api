import { TCultureModel } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const findCulturesByCategoryId = async (
  Model: TCultureModel,
  id: string | number,
) => {
  try {
    return Model.findAll({
      where: {
        categoryId: id,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
