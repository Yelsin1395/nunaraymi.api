import Joi from 'joi';
import AppError from '@shared/infra/shared.exception';
import regex from '@shared/common/regex';
import { IKapucCreate } from '@kapuc/core/interface/kapuc.interface';

export function createKapucValidateInput(kapuc: IKapucCreate) {
  const schema = Joi.object({
    name: Joi.string().required(),
    ruc: Joi.string().regex(regex.ruc).required(),
    domainUrl: Joi.string().regex(regex.URL).required().allow(null),
  });

  const { error } = schema.validate(kapuc);

  if (error) {
    throw new AppError(400, 'ERROR_REQUEST_VALIDATE_INPUT', error.details[0].message);
  }
}
