import { Yield } from '@agrarspace/shared';
import _ from 'lodash';

export const buildTopCultureStructure = (data: Yield[]) => {
  return _.map(data, (item, i) => ({
    ...item.getDataValue('culture').dataValues,
    data: {
      x: String(i + 1),
      y: item.getDataValue('totalCollectedWeight').toString(),
    },
  }));
};
