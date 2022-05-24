import { Year } from '@agrarspace/shared';
import _ from 'lodash';

import { getTotalAnnualYearIncome } from '../../service/statistics/getTotalAnnualYearIncome.service';

import { AppError } from '../../utils/error';
import { GetTotalOrganizationAnnualYearsIncome } from '../../types/resolvers';
import { TotalOrganizationAnnualYearsIncome } from '../../types/graphql';

export const getTotalOrganizationAnnualYearsIncome: GetTotalOrganizationAnnualYearsIncome =
  async (__, { id }) => {
    const statistics = await getTotalAnnualYearIncome(Year, Number(id));

    if (!_.get(statistics, 'data')?.length)
      AppError.lackOfData('Year statistics is empty');

    if (
      (_.get(statistics, 'data')?.length as number) === 1 &&
      (!_.get(_.nth(_.get(statistics, 'data'), 0), 'sumCollected') ||
        !_.get(_.nth(_.get(statistics, 'data'), 0), 'sumPlanted'))
    )
      AppError.lackOfData('Not enough data to display');

    return statistics as TotalOrganizationAnnualYearsIncome;
  };
