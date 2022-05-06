import { Plantation } from '@agrarspace/shared';

import { GetOrganizationPlantationList } from '../../../types/resolvers';
import { getOrganizationPlantationsListService } from '../../../service/plantations/getPlantationsList.service';
import { PlantationsList } from '../../../types/graphql';

export const getOrganizationPlantationList: GetOrganizationPlantationList =
  async (_, { data: { search, filter, pagination, sort } }, { user }) => {
    const result = await getOrganizationPlantationsListService(Plantation, {
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
