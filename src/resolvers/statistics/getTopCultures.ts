import { Culture, Yield } from '@agrarspace/shared';

import { GetTopResolver } from '../../types/resolvers';
import { getTopCulturesByYield as getByYield } from '../../service/statistics/getTopCulturesByYield';

export const getTopCulturesByYield: GetTopResolver = async () => {
  const result = await getByYield(Culture, Yield);
  console.log(result);
  console.log(
    result?.forEach((item) =>
      console.log(
        `cultureId: ${item.cultureId}, total: ${item.getDataValue(
          'totalCollectedWeight',
        )}, cultureName: ${item.getDataValue('culture').name}`,
      ),
    ),
  );
  return {
    message: 'test',
  };
};
