import { Organization } from '@agrarspace/shared';

import { findOrganizationById } from '../../../service/organization';

import { GetMyOrganizationResolver } from '../../../types/resolvers';
import { AppError } from '../../../utils/error';

export const getMyOrganization: GetMyOrganizationResolver = async (
  _,
  __,
  { user },
) => {
  const organization = await findOrganizationById(
    Organization,
    user?.organizationId as number,
  );
  if (!organization) AppError.userInput('Organization das not exist');

  return organization as Organization;
};
