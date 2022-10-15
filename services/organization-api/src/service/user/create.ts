import { TUserModel, UserRoles } from '@agrarspace/shared';
import { SignUp } from '../../types/graphql';

import { AppError } from '../../utils/error';

interface ICreateUser extends SignUp {
  role: UserRoles,
  provider: string,
}

export const createUser = async (Model: TUserModel, data: ICreateUser) => {
  try {
    return await Model.create({
      ...data,
      firstName: data.name,
      lastName: data.name,
    });
  } catch (err: Error | unknown) {
    if (err instanceof Error) AppError.database(err.message);
  }
};
