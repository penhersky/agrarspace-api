import { Culture, Yield } from '@agrarspace/shared';

import { GetTopResolver } from '../../types/resolvers';
import { getTopCultures } from '../../service/statistics/top';

export const getTop: GetTopResolver = async () => {
  const result = await getTopCultures(Culture, Yield);
  console.log(result);
  console.log(result?.length);
  return {
    message: 'test',
  };
};
