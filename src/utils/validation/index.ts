import Joi from 'joi';
import _ from 'lodash';

export const extractError = (error: Joi.ValidationErrorItem[]) => ({
  field: _.chain(error).nth(0).get('path').nth(0),
  message: _.chain(error).nth(0).get('message'),
});
