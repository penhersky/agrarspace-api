import { TOrganizationModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const findOrganizationById = async (
  Model: TOrganizationModel,
  id: number,
) => {
  try {
    return await Model.findByPk(id);
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const findOrganizationByOwnerId = async (
  Model: TOrganizationModel,
  id: number,
) => {
  try {
    return await Model.findOne({
      where: {
        ownerId: id,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
