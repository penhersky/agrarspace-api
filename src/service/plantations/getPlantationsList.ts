import { TPlantationModel, sequelize } from '@agrarspace/shared';
import _ from 'lodash';

import { AppError } from '../../utils/error';
import { CODE } from '../../utils/constants/error';
import { buildSearch, buildMinMax } from '../../utils/queryBuilder';

interface IListOption {
  organizationId: number;
  pagination: {
    itemCountPerPage: number;
    page: number;
  };
  sort: {
    field?: string | null;
    order?: 'DESC' | 'ASC' | null;
  };
  search?: string;
  filter: {
    areaSize?: {
      min?: number | null;
      max?: number | null;
    } | null;
  };
}

export const getOrganizationPlantations = async (
  PlantationModel: TPlantationModel,
  option: IListOption,
) => {
  try {
    const where = {
      organizationId: option.organizationId,
      ...(option.search ? buildSearch(['region'], option.search) : {}),
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
    if (totalPagesCount < option.pagination.page)
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
      data: list,
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
    if (err instanceof Error) AppError.database(err.message);
  }
};
