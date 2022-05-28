import { TPlantationModel, sequelize } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';
import { CODE } from '../../utils/constants/error';
import { buildSearch, buildMinMax } from '../../utils/queryBuilder';
import { Plantation } from '../../types/graphql';
import { IListOption, IMinMaxFilter } from '../../types/services';
import { ApolloError } from 'apollo-server-core';

interface IPlantationListFilter {
  areaSize?: IMinMaxFilter;
}

export const getOrganizationPlantationsListService = async (
  PlantationModel: TPlantationModel,
  organizationId: number,
  option: IListOption<IPlantationListFilter>,
) => {
  try {
    const where = {
      organizationId,
      ...(option.search ? buildSearch(['region', 'name'], option.search) : {}),
    };

    const defaultOption = await PlantationModel.findAll({
      where,
      attributes: [
        [sequelize.fn('max', sequelize.col('areaSize')), 'max'],
        [sequelize.fn('min', sequelize.col('areaSize')), 'min'],
      ],
    });

    const totalItemCount = await PlantationModel.count({
      where: {
        ...where,
        ...(option.filter.areaSize
          ? buildMinMax(
              'areaSize',
              option.filter.areaSize.min ||
                _.get(_.nth(defaultOption, 0), 'dataValues.min'),
              option.filter.areaSize.max ||
                _.get(_.nth(defaultOption, 0), 'dataValues.max'),
            )
          : {}),
      },
    });
    const totalPagesCount = Math.ceil(
      totalItemCount / option.pagination.itemCountPerPage,
    );
    if (totalItemCount !== 0 && totalPagesCount < option.pagination.page)
      AppError.lackOfData(
        `page: ${option.pagination.page} totalPage: ${totalPagesCount}`,
        CODE.PAGINATION,
      );

    const list = await PlantationModel.findAll({
      where: {
        ...where,
        ...(option.filter.areaSize
          ? buildMinMax(
              'areaSize',
              option.filter.areaSize.min ||
                _.get(_.nth(defaultOption, 0), 'dataValues.min'),
              option.filter.areaSize.max ||
                _.get(_.nth(defaultOption, 0), 'dataValues.max'),
            )
          : {}),
      },
      order: option.sort.field
        ? [[option.sort.field, option.sort.order ?? 'DESC']]
        : undefined,
      limit: option.pagination.itemCountPerPage,
      offset: option.pagination.itemCountPerPage * (option.pagination.page - 1),
    });

    return {
      data: list as unknown as Plantation[],
      pagination: {
        totalItemCount,
        totalPagesCount,
        itemCountPerPage: option.pagination.itemCountPerPage,
        currentPage: option.pagination.page,
      },
      option: {
        areaSize: {
          max: _.get(_.nth(defaultOption, 0), 'dataValues.max'),
          min: _.get(_.nth(defaultOption, 0), 'dataValues.min'),
        },
      },
    };
  } catch (err: Error | unknown) {
    if (err instanceof ApolloError) throw err;
    if (err instanceof Error) AppError.database(err.message);
  }
};
