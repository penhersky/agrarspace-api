import _ from 'lodash';
import { Year } from '@agrarspace/shared';

import { calcPercent } from '../utils/percent';

export const buildYearsListStructure = (data: Year[]) =>
  _.map(data, (item) => ({
    id: _.get(item, 'dataValues.id'),
    areaSize: _.get(item, 'dataValues.plantation.dataValues.areaSize'),
    plantedArea: _.get(item, 'dataValues.plantedArea'),
    plantedPercent: calcPercent(
      _.get(item, 'dataValues.plantation.dataValues.areaSize'),
      _.get(item, 'dataValues.plantedArea'),
    ),
    plantedWeight: _.get(item, 'dataValues.plantedWeight'),
    collectedWeight: _.get(item, 'dataValues.collectedWeight'),
    dateOfSowingEnd: _.get(item, 'dataValues.dateOfSowingEnd'),
    dateOfSowingStart: _.get(item, 'dataValues.dateOfSowingStart'),
    dateOfCollectionStart: _.get(item, 'dataValues.dateOfCollectionStart'),
    dateOfCollectionEnd: _.get(item, 'dataValues.dateOfCollectionEnd'),
    plantationId: _.get(item, 'dataValues.plantation.dataValues.id'),
    plantationName: _.get(item, 'dataValues.plantation.dataValues.name'),
    cultureId: _.get(item, 'dataValues.culture.dataValues.id'),
    cultureName: _.get(item, 'dataValues.culture.dataValues.name'),
    sowingYear: _.get(item, 'dataValues.sowingYear'),
    collectedYear: _.get(item, 'dataValues.collectedYear'),
  }));
