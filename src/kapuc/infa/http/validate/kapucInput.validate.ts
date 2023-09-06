import Joi, { ObjectSchema } from 'joi';
import AppError from '@shared/infra/shared.exception';
import regex from '@shared/common/regex';
import { IKapucCreate } from '@kapuc/core/interface/kapuc.interface';

export function createKapucValidateInput(input: IKapucCreate) {
  const schema: ObjectSchema<IKapucCreate> = Joi.object({
    name: Joi.string().required(),
    ruc: Joi.string().regex(regex.ruc).required(),
    domainUrl: Joi.string().regex(regex.URL).required().allow(null),
  });

  const { error } = schema.validate(input);

  if (error) {
    throw new AppError(400, 'ERROR_REQUEST_VALIDATE_INPUT', error.details[0].message);
  }
}
