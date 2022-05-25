import _ from 'lodash';
import { Organization, logger } from '@agrarspace/shared';

import { Employee, EmployeeResolvers } from '../../types/graphql';
import { findOrganizationById } from '../../service/organization';

export default {
  organization: async (root) => {
    try {
      const organization = await findOrganizationById(
        Organization,
        _.get(root, 'organizationId'),
      );
      if (organization) return organization;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
} as EmployeeResolvers<any, Employee>;
