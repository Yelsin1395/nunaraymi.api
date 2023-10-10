import Joi, { ObjectSchema } from 'joi';
import { ubigeoSchemaValidate } from '@shared/infra/http/validate/common/ubigeo.schema';
import AppError from '@shared/infra/shared.exception';
import { RUWANA } from '@shared/common/constants';
import regex from '@shared/common/regex';
import { IRuwanaCreate } from '@ruwana/core/interface/ruwana.interface';

export function createRuwanaValidateInput(input: IRuwanaCreate) {
  const schema: ObjectSchema<IRuwanaCreate> = Joi.object({
    kamachiqId: Joi.string().required(),
    name: Joi.string().trim().required(),
    synopsis: Joi.string().trim().required(),
    date: Joi.date().required(),
    time: Joi.string().trim().required(),
    bannerUrl: Joi.string().regex(regex.URL).required(),
    videoUrl: Joi.string().regex(regex.URL).required(),
    target: Joi.string()
      .valid(...RUWANA.TARGETS)
      .required(),
    address: ubigeoSchemaValidate,
  });

  const { error } = schema.validate(input);

  if (error) {
    throw new AppError(400, 'ERROR_REQUEST_VALIDATE_INPUT', error.details[0].message);
  }
}
