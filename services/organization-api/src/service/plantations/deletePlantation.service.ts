import { ApolloError } from 'apollo-server-koa';
import { TPlantationModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';

export const deletePlantationService = async (
  Model: TPlantationModel,
  id: string | number,
  organizationId: string | number,
) => {
  try {
    const plantation = await Model.findByPk(id);
    if (!plantation) AppError.userInput('Such Plantation das not exists');

    if (organizationId !== plantation?.organizationId)
      AppError.unexpected('Try to delete alien plantation');

    await plantation?.destroy();

    return plantation;
  } catch (err: Error | unknown | ApolloError) {
    if (err instanceof ApolloError) throw err;
    if (err instanceof Error) AppError.database(err.message);
  }
};
