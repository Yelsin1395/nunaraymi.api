import Joi, { ObjectSchema } from 'joi';
import { identificationDocumentSchema } from '@shared/infra/http/validate/common/identification-document.schema';
import AppError from '@shared/infra/shared.exception';
import { USER } from '@shared/common/constants';
import regex from '@shared/common/regex';
import { IUsuarioCreate } from '@usuario/core/interface/usuario.interface';

export function createUsuarioValidateInput(input: IUsuarioCreate) {
  const schema: ObjectSchema<IUsuarioCreate> = Joi.object({
    kamachiqId: Joi.string().required().allow(null),
    identificationDocument: identificationDocumentSchema,
    name: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    gender: Joi.string()
      .valid(...USER.GENEDER)
      .required(),
    email: Joi.object({
      address: Joi.string().regex(regex.email).required(),
    }),
    password: Joi.string().required(),
    role: Joi.string()
      .valid(...USER.ROLES)
      .required(),
  });

  const { error } = schema.validate(input);

  if (error) {
    throw new AppError(400, 'ERROR_REQUEST_VALIDATE_INPUT', error.details[0].message);
  }
}
