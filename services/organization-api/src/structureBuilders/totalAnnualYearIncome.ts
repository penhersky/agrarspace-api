import _ from 'lodash';
import { Year } from '@agrarspace/shared';

export const buildTotalAnnualIncome = (data: Year[], option: Year) => ({
  data: _.map(data, (item) => ({
    sumPlanted: _.get(item, 'dataValues.sum_planted'),
    sumCollected: _.get(item, 'dataValues.sum_collected'),
    year: +_.get(item, 'dataValues.year'),
  })),
  avgCollected: +Number(_.get(option, 'dataValues.avg_collected')).toFixed(1),
  avgPlanted: +Number(_.get(option, 'dataValues.avg_planted')).toFixed(1),
  maxValue:
    _.get(option, 'dataValues.max_collected') >
    _.get(option, 'dataValues.max_planted')
      ? _.get(option, 'dataValues.max_collected')
      : _.get(option, 'dataValues.max_planted'),
});
