import { TYearModel } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';

export const findYearId = async (Model: TYearModel, id: string | number) => {
  try {
    return await Model.findByPk(id);
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const findYearsByPlantationId = async (
  Model: TYearModel,
  plantationId: string | number,
) => {
  try {
    return await Model.findAll({
      where: {
        plantationId,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const findCurrentYearForPlantation = async (
  Model: TYearModel,
  plantationId: string | number,
) => {
  try {
    return _.nth(
      await Model.findAll({
        where: { plantationId },
        order: [['dateOfSowingStart', 'DESC']],
      }),
      0,
    );
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
