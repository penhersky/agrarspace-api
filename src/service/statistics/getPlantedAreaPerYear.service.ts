import { sequelize, TYearModel } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';

export const getPlantedAreaPerYear = async (
  yearModel: TYearModel,
  year: number,
  organizationId?: number,
) => {
  try {
    const where = organizationId
      ? 'AND plantation."organizationId" = :organizationId'
      : '';

    const result = await sequelize.query(
      `
      SELECT SUM(year."plantedArea") as planted,
		        SUM(plantation."areaSize") as total
      FROM ${yearModel.tableName}
      INNER JOIN plantation ON plantation.id = year."plantationId"
      WHERE EXTRACT("year" FROM year."dateOfCollectionEnd") = :year ${where}
      GROUP BY EXTRACT("year" FROM year."dateOfCollectionEnd");
    `,
      {
        model: yearModel,
        mapToModel: true,
        replacements: { organizationId, year },
      },
    );

    return result;
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
