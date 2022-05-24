import { Culture, Year } from '@agrarspace/shared';

import { getTopCulturesByYield as getByYield } from '../../service/statistics/getTopCulturesByYield';
import { buildTopCultureStructure } from '../../structureBuilders/cultureStatistics';

import { AppError } from '../../utils/error';
import { GetTopCultureResolver } from '../../types/resolvers';

export const getTopCulturesByYield: GetTopCultureResolver = async () => {
  const statistics = await getByYield(Culture, Year);

  if (!statistics) AppError.lackOfData('Culture statistics is empty');

  return buildTopCultureStructure(statistics as Year[]);
};
