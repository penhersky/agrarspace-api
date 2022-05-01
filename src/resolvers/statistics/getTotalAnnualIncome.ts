import { Year } from '@agrarspace/shared';
import _ from 'lodash';

import { getTotalAnnualYearIncome } from '../../service/statistics/getTotalAnnualYearIncome.service';

import { AppError } from '../../utils/error';
import { GetTotalOrganizationAnnualYearsIncome } from '../../types/resolvers';
import { TotalOrganizationAnnualYearsIncome } from '../../types/graphql';

export const getTotalOrganizationAnnualYearsIncome: GetTotalOrganizationAnnualYearsIncome =
  async (__, { id }) => {
    const statistics = await getTotalAnnualYearIncome(Year, Number(id));

    if (!statistics?.data) AppError.lackOfData('Year statistics is empty');

    return statistics as TotalOrganizationAnnualYearsIncome;
  };
