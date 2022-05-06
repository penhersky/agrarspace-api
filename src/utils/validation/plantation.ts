import Joi from 'joi';

import { PlantationInput } from '../../types/graphql';

export const createPlantationValidator = async (
  data: PlantationInput,
): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(124).required(),
    status: Joi.string().allow(null),
    areaSize: Joi.number().min(0).max(999999).required(),
    region: Joi.string().min(4).max(256).required(),
    description: Joi.string().min(0).max(900).allow(null),
  });

  const result = schema.validate(data);
  return result.error ? result.error.details : undefined;
};
