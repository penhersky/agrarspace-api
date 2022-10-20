import { Culture, Year } from '@agrarspace/shared';
import _ from 'lodash';

import { TopCultureItem } from '../types/graphql';

export const buildTopCultureStructure = (data: Year[]) => {
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

export const buildOrganizationTopCulturesByYear = (data: Culture[]) => {
  return _.map(data, (culture) => ({
    culture: {
      ..._.get(culture, 'dataValues'),
    },
    count: _.get(culture, 'dataValues.culturescount'),
  }));
};
