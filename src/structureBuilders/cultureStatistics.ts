import { Yield } from '@agrarspace/shared';
import _ from 'lodash';

import { TopCultureItem } from '../types/graphql';

export const buildTopCultureStructure = (data: Yield[]) => {
  return _.sortBy(
    _.map(data, (item, i) => ({
      ...item.getDataValue('culture').dataValues,
      data: {
        x: String(i + 1),
        y: item.getDataValue('totalCollectedWeight').toString(),
      },
    })),
    (item: TopCultureItem) => +_.get(item, 'data.y'),
  );
};
