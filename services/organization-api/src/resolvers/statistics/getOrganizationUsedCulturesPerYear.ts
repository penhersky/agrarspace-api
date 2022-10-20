import { Culture } from '@agrarspace/shared';
import _ from 'lodash';

import { getOrganizationUsedCulturesPerYearService } from '../../service/statistics/getOrganizationUsedCulturesPerYear.service';

import { AppError } from '../../utils/error';
import { GetOrganizationUsedCulturesPerYear } from '../../types/resolvers';
import { OrganizationUsedCulturesPerYearItem } from '../../types/graphql';

export const getOrganizationUsedCulturesPerYear: GetOrganizationUsedCulturesPerYear =
  async (__, { year }, { user }) => {
    if (!user?.organizationId) AppError.lackOfData('Action is impossible');

    const statistics = await getOrganizationUsedCulturesPerYearService(
      Culture,
      year,
      user?.organizationId,
    );

    if (!statistics?.length) AppError.lackOfData('Action is impossible');

    return statistics as OrganizationUsedCulturesPerYearItem[];
  };
