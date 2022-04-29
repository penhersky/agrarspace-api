import { TUserModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const findUserByEmail = async (Model: TUserModel, email: string) => {
  try {
    return await Model.findOne({
      where: { email },
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};

export const findUserById = async (Model: TUserModel, id: string | number) => {
  try {
    return await Model.findByPk(id);
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
