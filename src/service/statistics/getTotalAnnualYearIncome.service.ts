import { sequelize, TYearModel } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';
import { buildTotalAnnualIncome } from '../../structureBuilders/totalAnnualYearIncome';

export interface TotalAnnualIncomeReturn {
  data: {
    sum_planted: number;
    sum_collected: number;
    year: number;
  };
  avgPlanted: number;
  avgCollected: number;
  maxValue: number;
}

export const getTotalAnnualYearIncome = async (
  model: TYearModel,
  organizationId?: number,
) => {
  try {
    const where = organizationId
      ? 'WHERE "organizationId" = :organizationId'
      : '';

    const list = await sequelize.query(
      `
      SELECT 
        SUM("plantedWeight") as sum_planted,
        SUM("collectedWeight") as sum_collected,
        EXTRACT("year" FROM "dateOfCollectionEnd") as year FROM public."${model.tableName}"
        ${where}
        GROUP BY EXTRACT("year" FROM "dateOfCollectionEnd")
        ORDER BY "year" ASC;
    `,
      {
        model: model,
        mapToModel: true,
        replacements: { organizationId },
      },
    );

    const option = await sequelize.query(
      `
      SELECT 
        AVG(sumCollected) as avg_collected,
        AVG(sumPlanted) as avg_planted,
        MAX(sumCollected) as max_collected FROM (
          SELECT SUM("plantedWeight") as sumPlanted,
            SUM("collectedWeight") as sumCollected,
            EXTRACT("year" FROM "dateOfCollectionEnd") as year FROM public."${model.tableName}"
            ${where}
            GROUP BY EXTRACT("year" FROM "dateOfCollectionEnd")
            ORDER BY "year" ASC
        ) as Temp;
      `,
      {
        model: model,
        mapToModel: true,
        replacements: { organizationId },
      },
    );

    return buildTotalAnnualIncome(list, option[0]);
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
