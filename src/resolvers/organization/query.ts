import { Organization } from '@agrarspace/shared';

import { findOrganizationById } from '../../service/organization';
import { GetMyOrganizationResolver } from '../../types/resolvers';
import {
  OrganizationError,
  AuthenticationError,
} from '../../utils/apolloError';
import { ERROR } from '../../utils/constants';

export const getMyOrganization: GetMyOrganizationResolver = async (
  _,
  __,
  { user },
) => {
  if (!user?.organizationId)
    throw new AuthenticationError(
      'You do not have access to this resource',
      ERROR.WRONG_CREDENTIALS,
    );

  const organization = await findOrganizationById(
    Organization,
    user.organizationId,
  );
  if (!organization)
    throw new OrganizationError('Organization das not exist', ERROR.NOT_FOUND);

  return organization;
};
