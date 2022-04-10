import { TOrganizationModel } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const findOrganizationById = async (
  Model: TOrganizationModel,
  id: number,
) => {
  try {
    return await Model.findByPk(id);
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
