import { Year } from '@agrarspace/shared';

import { GetOrganizationYearsList } from '../../../types/resolvers';
import { getYearsListService } from '../../../service/year/getYearsList.service';
import { YearsList } from '../../../types/graphql';

export const getOrganizationYearsList: GetOrganizationYearsList = async (
  _,
  { data: { search, filter, pagination, sort } },
  { user },
) => {
  const result = await getYearsListService(
    Year,
    user?.organizationId as number,
    {
      pagination: {
        itemCountPerPage: pagination?.itemCountPerPage ?? 10,
        page: pagination?.page ?? 1,
      },
      sort,
      filter: {
        areaSize: filter?.areaSize,
        culture: filter?.culture ?? undefined,
        collectedWeight: filter?.collectedWeight,
        plantedWeight: filter?.plantedWeight,
        plantedArea: filter?.plantedArea,
        dateOfCollectionEnd: filter?.dateOfCollectionEnd ?? undefined,
        dateOfCollectionStart: filter?.dateOfCollectionStart ?? undefined,
        dateOfSowingEnd: filter?.dateOfSowingEnd ?? undefined,
        dateOfSowingStart: filter?.dateOfSowingStart ?? undefined,
      },
      search: search?.value ?? undefined,
    },
  );

  return result as YearsList;
};
