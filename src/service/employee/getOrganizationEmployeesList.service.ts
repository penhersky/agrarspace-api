import { EmployeeRoles, TEmployeeModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';
import { IListOption } from '../../types/services';
import { buildSearch } from '../../utils/queryBuilder';

interface IPlantationListFilter {
  role?: EmployeeRoles;
}

export const getOrganizationEmployeesListService = async (
  Model: TEmployeeModel,
  organizationId: number,
  option: IListOption<IPlantationListFilter>,
) => {
  try {
    const result = await Model.findAndCountAll({
      where: {
        organizationId,
        ...(option.filter.role ? { role: option.filter.role } : {}),
        ...(option.search
          ? buildSearch(['name', 'position'], option.search)
          : {}),
      },
      order: option.sort.field
        ? [[option.sort.field, option.sort.order ?? 'DESC']]
        : ['createdAt', 'DESC'],
      limit: option.pagination.itemCountPerPage,
      offset: option.pagination.itemCountPerPage * (option.pagination.page - 1),
    });

    return {
      data: result.rows,
      pagination: {
        totalItemCount: result.count,
        totalPagesCount: Math.ceil(
          result.count / option.pagination.itemCountPerPage,
        ),
        itemCountPerPage: option.pagination.itemCountPerPage,
        currentPage: option.pagination.page,
      },
    };
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
