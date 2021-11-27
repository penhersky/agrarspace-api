import { TUserModel } from '@agrarspace/shared';

import { DatabaseError } from '../../utils/apolloError';

export const findUserByEmail = async (Model: TUserModel, email: string) => {
  try {
    return Model.findOne({
      where: { email },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new DatabaseError(err.message);
  }
};
