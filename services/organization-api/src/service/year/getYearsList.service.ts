import { sequelize, TYearModel, Plantation, Culture } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';
import { IListOption, IMinMaxFilter } from '../../types/services';
import { buildYearsListStructure } from '../../structureBuilders/list';
import { ApolloError } from 'apollo-server-core';

interface IYearListFilter {
  areaSize?: IMinMaxFilter;
  plantedArea?: IMinMaxFilter;
  plantedWeight?: IMinMaxFilter;
  collectedWeight?: IMinMaxFilter;
  dateOfSowingStart?: String;
  dateOfSowingEnd?: string;
  dateOfCollectionStart?: string;
  dateOfCollectionEnd?: string;
  culture?: string;
}

// SELECT year."id",
// plantation."areaSize",
// year."plantedArea",
// plantation."id" AS plantation_id,
// plantation."name" AS plantation_name,
// year."plantedWeight",
// year."collectedWeight",
// year."dateOfSowingStart",
// year."dateOfSowingEnd",
// year."dateOfCollectionStart",
// year."dateOfCollectionEnd",
// EXTRACT("year" FROM year."dateOfSowingStart") AS sowing_year,
// EXTRACT("year" FROM year."dateOfCollectionEnd") AS collection_year,
// culture."id" AS culture_id,
// culture."name" AS culture_name
//   FROM year
// INNER JOIN plantation ON plantation.id = year."plantationId"
// INNER JOIN culture ON culture.id = year."cultureId";

export const getYearsListService = async (
  yearModel: TYearModel,
  organizationId: number,
  option: IListOption<IYearListFilter>, // TODO: Add logic for filters and search
) => {
  try {
    const result = await yearModel.findAndCountAll({
      where: {
        organizationId,
      },
      attributes: [
        'id',
        'plantedArea',
        'plantedWeight',
        'collectedWeight',
        'dateOfSowingStart',
        'dateOfSowingEnd',
        'dateOfCollectionStart',
        'dateOfCollectionEnd',
        [
          sequelize.literal('EXTRACT("year" FROM "dateOfSowingStart")'),
          'sowingYear',
        ],
        [
          sequelize.literal('EXTRACT("year" FROM "dateOfCollectionEnd")'),
          'collectedYear',
        ],
      ],
      include: [
        {
          model: Plantation,
          attributes: ['id', 'name', 'areaSize'],
        },
        {
          model: Culture,
          attributes: ['id', 'name'],
        },
      ],
      order: option.sort.field
        ? [[option.sort.field, option.sort.order ?? 'DESC']]
        : [
            ['dateOfCollectionEnd', 'ASC'],
            ['dateOfSowingStart', 'ASC'],
          ],
      limit: option.pagination.itemCountPerPage,
      offset: option.pagination.itemCountPerPage * (option.pagination.page - 1),
    });

    return {
      data: buildYearsListStructure(result.rows),
      pagination: {
        totalItemCount: result.count,
        totalPagesCount: Math.ceil(
          result.count / option.pagination.itemCountPerPage,
        ),
        itemCountPerPage: option.pagination.itemCountPerPage,
        currentPage: option.pagination.page,
      },
      option: {},
    };
  } catch (err: Error | unknown) {
    if (err instanceof ApolloError) throw err;
    if (err instanceof Error) AppError.database(err.message);
  }
};
