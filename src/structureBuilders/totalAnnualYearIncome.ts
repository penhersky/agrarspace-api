import _ from 'lodash';
import { Year } from '@agrarspace/shared';

export const buildTotalAnnualIncome = (data: Year[], option: Year) => ({
  data: _.map(data, (item) => ({
    sumPlanted: _.get(item, 'dataValues.sum_planted'),
    sumCollected: _.get(item, 'dataValues.sum_collected'),
    year: +_.get(item, 'dataValues.year'),
  })),
  avgCollected: _.get(option, 'dataValues.avg_collected'),
  avgPlanted: _.get(option, 'dataValues.avg_planted'),
  maxCollected: _.get(option, 'dataValues.max_collected'),
});
