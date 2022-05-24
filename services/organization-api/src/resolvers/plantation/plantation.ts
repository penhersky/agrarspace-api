import _ from 'lodash';
import { Organization, Year, logger } from '@agrarspace/shared';

import {
  PlantationResolvers,
  Plantation,
  Year as TYear,
} from '../../types/graphql';
import { findOrganizationById } from '../../service/organization';
import {
  findCurrentYearForPlantationService,
  findYearsByPlantationIdService,
} from '../../service/year';

export default {
  organization: async (root) => {
    try {
      const organization = await findOrganizationById(Organization, root.id);
      if (organization) return organization;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
  currentYear: async (root) => {
    try {
      const year = await findCurrentYearForPlantationService(Year, root.id);
      if (year) return year;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
  years: async (root: any) => {
    try {
      const years = await findYearsByPlantationIdService(Year, root.id);
      if (years) return years as unknown as TYear[];
      return [];
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return [null];
    }
  },
} as PlantationResolvers<any, Plantation>;
