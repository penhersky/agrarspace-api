import {
  sequelize,
  TEmployeeModel,
  TPlantationModel,
  TYearModel,
} from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';

export const getTotalOrganizationAreaSize = async (
  Model: TPlantationModel,
  id: string,
) => {
  try {
    return await Model.sum('areaSize', { where: { organizationId: id } });
  } catch (err: Error | unknown) {
    console.log(err);
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const getTotalOrganizationResourcesPerYear = async (
  id: string,
  year: number,
) => {
  try {
    const result = await sequelize.query(`
      SELECT  SUM("plantedWeight") as totalPlanted, SUM("collectedWeight") as totalCollected FROM public.year
      WHERE "organizationId" = ${id}
      AND
      EXTRACT("year" FROM "dateOfSowingStart") = ${year};
    `);

    return {
      totalPlanted: _.get(result[0][0], 'totalplanted'),
      totalCollected: _.get(result[0][0], 'totalcollected'),
    };
  } catch (err: Error | unknown) {
    console.log(err);
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const getCulturesCountInOrganization = async (
  Model: TYearModel,
  id: string,
) => {
  try {
    const result = await Model.count({
      where: { organizationId: id },
      group: ['Year.cultureId'],
    });

    return result.length;
  } catch (err: Error | unknown) {
    console.log(err);
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const getPlantationsCountInOrganization = async (
  Model: TPlantationModel,
  id: string,
) => {
  try {
    const result = await Model.findAndCountAll({
      where: { organizationId: id },
    });

    return result.count;
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const getEmployeesCountInOrganization = async (
  Model: TEmployeeModel,
  id: string,
) => {
  try {
    const result = await Model.findAndCountAll({
      where: { organizationId: id },
    });

    return result.count;
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
