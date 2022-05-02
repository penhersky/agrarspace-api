import _ from 'lodash';
import { Year } from '@agrarspace/shared';

import { calcPercent } from '../utils/percent';

export const buildPlantedAreaPerYear = (data: Year) => ({
  data: [
    {
      value: _.get(data, 'dataValues.planted'),
      name: 'planted',
      percent: +calcPercent(
        _.get(data, 'dataValues.total'),
        _.get(data, 'dataValues.planted'),
      ).toFixed(1),
    },
    {
      value:
        _.get(data, 'dataValues.total') - _.get(data, 'dataValues.planted'),
      name: 'not planted',
      percent: +calcPercent(
        _.get(data, 'dataValues.total'),
        _.get(data, 'dataValues.total') - _.get(data, 'dataValues.planted'),
      ).toFixed(1),
    },
  ],
  totalValue: _.get(data, 'dataValues.total'),
  totalPercent: 100,
});
