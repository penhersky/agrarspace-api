import { TEmployeeModel } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const findEmployeeById = async (Model: TEmployeeModel, id: number) => {
  try {
    return await Model.findByPk(id);
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};

export const findEmployeeByNameAndOrganizationId = async (
  Model: TEmployeeModel,
  organizationId: number,
  name: string,
) => {
  try {
    return await Model.findOne({
      where: {
        organizationId,
        name,
      },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
