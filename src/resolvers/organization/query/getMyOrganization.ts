import { Organization } from '@agrarspace/shared';

import { findOrganizationById } from '../../../service/organization';

import { GetMyOrganizationResolver } from '../../../types/resolvers';
import { AppError } from '../../../utils/error';

export const getMyOrganization: GetMyOrganizationResolver = async (
  _,
  __,
  { user },
) => {
  if (!user?.organizationId)
    AppError.authentication(
      'You do not have access to this resource',
      'NEED_REAUTHENTICATE',
    );

  const organization = await findOrganizationById(
    Organization,
    user?.organizationId,
  );
  if (!organization) AppError.unexpected('Organization das not exist');

  return organization as Organization;
};
