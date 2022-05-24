import _ from 'lodash';
import { Sequelize } from '@agrarspace/shared';

export const buildSearch = (fields: string[], text: string) => ({
  [Sequelize.Op.or]: _.map(fields, (item) => [
    {
      [item]: {
        [Sequelize.Op.like]: `%${text}`,
      },
    },
    {
      [item]: {
        [Sequelize.Op.like]: `%${text}%`,
      },
    },
    {
      [item]: {
        [Sequelize.Op.like]: `${text}%`,
      },
    },
  ]).flat(),
});

export const buildMinMax = (field: string, min: number, max: number) => ({
  [Sequelize.Op.and]: [
    {
      [field]: {
        [Sequelize.Op.gte]: min,
      },
    },
    {
      [field]: {
        [Sequelize.Op.lte]: max,
      },
    },
  ],
});
