import { Plantation } from '@agrarspace/shared';

import { GetOrganizationPlantationList } from '../../../types/resolvers';
import { getOrganizationPlantations } from '../../../service/plantations';
import { PlantationsList } from '../../../types/graphql';

export const getOrganizationPlantationList: GetOrganizationPlantationList =
  async (_, { data: { search, filter, pagination, sort } }, { user }) => {
    const result = await getOrganizationPlantations(Plantation, {
      organizationId: user?.organizationId as number,
      pagination: {
        itemCountPerPage: pagination?.itemCountPerPage ?? 10,
        page: pagination?.page ?? 1,
      },
      sort: sort || {
        field: 'updatedAt',
        order: 'DESC',
      },
      search: search?.value ?? undefined,
      filter: {
        areaSize: filter?.areaSize,
      },
    });

    return result as PlantationsList;
  };
