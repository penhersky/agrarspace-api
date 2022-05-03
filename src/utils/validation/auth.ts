import Joi from 'joi';

import { PATTERNS } from '../constants';

export const user = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    name: Joi.string().pattern(PATTERNS.name).min(3).max(60).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  });

  const result = schema.validate({ name, email });
  return result.error ? result.error.details : undefined;
};

export const password = async (data: {
  password: string;
}): Promise<undefined | Joi.ValidationErrorItem[]> => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(60).pattern(PATTERNS.password).required(),
  });

  const result = schema.validate(data);
  return result.error ? result.error.details : undefined;
};
