import { Year } from '@agrarspace/shared';
import _ from 'lodash';

import { getPlantedAreaPerYear } from '../../service/statistics/getPlantedAreaPerYear.service';

import { AppError } from '../../utils/error';
import { GetOrganizationPlantedAreaPerYearResolver } from '../../types/resolvers';

import { buildPlantedAreaPerYear } from '../../structureBuilders/percentStatistic';

export const getOrganizationPlantedAreaPerYear: GetOrganizationPlantedAreaPerYearResolver =
  async (__, { year }, { user }) => {
    if (!user?.organizationId)
      AppError.lackOfData('Lack of data for this action');

    const statistics = await getPlantedAreaPerYear(
      Year,
      year,
      user?.organizationId,
    );

    if (!statistics?.length)
      AppError.lackOfData('Lack of data for this action');

    return buildPlantedAreaPerYear(_.nth(statistics, 0) as Year);
  };
