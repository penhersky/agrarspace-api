import { Employee } from '@agrarspace/shared';

import { GetOrganizationEmployeeList } from '../../../types/resolvers';
import { getOrganizationEmployeesListService } from '../../../service/employee/getOrganizationEmployeesList.service';
import { EmployeeList } from '../../../types/graphql';

export const getOrganizationEmployeesList: GetOrganizationEmployeeList = async (
  _,
  { data: { search, filter, pagination, sort } },
  { user },
) => {
  const result = await getOrganizationEmployeesListService(
    Employee,
    user?.organizationId as number,
    {
      pagination: {
        itemCountPerPage: pagination?.itemCountPerPage ?? 10,
        page: pagination?.page ?? 1,
      },
      sort,
      filter: {
        role: filter?.role ?? undefined,
      },
      search: search?.value ?? undefined,
    },
  );

  return result as EmployeeList;
};
