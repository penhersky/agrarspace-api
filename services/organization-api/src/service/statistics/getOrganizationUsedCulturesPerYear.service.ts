import { sequelize, TCultureModel } from '@agrarspace/shared';
import _ from 'lodash';
import { buildOrganizationTopCulturesByYear } from '../../structureBuilders/cultureStatistics';

import { AppError } from '../../utils/error';

export const getOrganizationUsedCulturesPerYearService = async (
  model: TCultureModel,
  year: number,
  organizationId?: number,
) => {
  try {
    const result = await sequelize.query(
      `
        SELECT category.id AS categoryId, category.name AS categoryName, category.color AS categoryColor, category.icon AS categoryIcon,
        culture.*,
        COUNT(culture.id) as culturesCount
        FROM public.year

        LEFT JOIN culture ON year."cultureId" = culture.id
        LEFT JOIN category ON category."id" = culture."categoryId"

        WHERE year."organizationId" = :organizationId AND EXTRACT("year" FROM year."dateOfCollectionEnd") = :year

        GROUP BY culture.id, category.id, EXTRACT("year" FROM year."dateOfCollectionEnd"), year."organizationId"
        ORDER BY culturesCount DESC;
      `,
      {
        model: model,
        mapToModel: true,
        replacements: { organizationId, year },
      },
    );

    return buildOrganizationTopCulturesByYear(result);
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
