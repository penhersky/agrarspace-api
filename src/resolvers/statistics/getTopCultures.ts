import { Culture, Yield } from '@agrarspace/shared';

import { getTopCulturesByYield as getByYield } from '../../service/statistics/getTopCulturesByYield';
import { buildTopCultureStructure } from '../../structureBuilders/cultureStatistics';

import { DataCombinationError } from '../../utils/apolloError';
import { GetTopCultureResolver } from '../../types/resolvers';

export const getTopCulturesByYield: GetTopCultureResolver = async () => {
  const statistics = await getByYield(Culture, Yield);

  if (!statistics)
    throw new DataCombinationError('Culture statistics is empty');

  return buildTopCultureStructure(statistics);
};
