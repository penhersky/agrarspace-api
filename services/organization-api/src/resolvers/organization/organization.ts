import _ from 'lodash';
import { User, logger } from '@agrarspace/shared';

import { Organization, OrganizationResolvers } from '../../types/graphql';
import { findUserById } from '../../service/user';

export default {
  owner: async (root) => {
    try {
      const user = await findUserById(User, _.get(root, 'ownerId'));
      if (user) return user;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
} as OrganizationResolvers<any, Organization>;
