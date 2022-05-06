import { ApolloError } from 'apollo-server-koa';
import { TPlantationModel } from '@agrarspace/shared';

import { AppError } from '../../utils/error';
import { PlantationInput } from '../../types/graphql';
import { createPlantationValidator } from '../../utils/validation/plantation';
import { extractError } from '../../utils/validation';

export const createPlantationService = async (
  Model: TPlantationModel,
  data: PlantationInput,
  organizationId: string | number,
) => {
  try {
    const validationResult = await createPlantationValidator(data);
    if (validationResult)
      AppError.userInput('Incorrect data', extractError(validationResult));

    const existPlantation = await Model.findOne({ where: { name: data.name } });
    if (existPlantation)
      AppError.userInput('Plantation with such Name Exists', {
        message: '"name" is already exist',
        field: 'name',
      });

    const plantation = await Model.create({ organizationId, ...data });

    return plantation;
  } catch (err: Error | unknown | ApolloError) {
    if (err instanceof ApolloError) throw err;
    if (err instanceof Error) AppError.database(err.message);
  }
};
