import { Year } from '@agrarspace/shared';
import _ from 'lodash';

import { getPlantedAreaPerYear } from '../../service/statistics/getPlantedAreaPerYear.service';

import { AppError } from '../../utils/error';
import { GetGlobalPlantedAreaPerYearResolver } from '../../types/resolvers';

import { buildPlantedAreaPerYear } from '../../structureBuilders/percentStatistic';

export const getGlobalPlantedAreaPerYear: GetGlobalPlantedAreaPerYearResolver =
  async (__, { year }) => {
    const statistics = await getPlantedAreaPerYear(Year, year);

    if (!statistics?.length)
      AppError.lackOfData('Lack of data for this action');

    return buildPlantedAreaPerYear(_.nth(statistics, 0) as Year);
  };
