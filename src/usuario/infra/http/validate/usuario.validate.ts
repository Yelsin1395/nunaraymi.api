import Joi, { ObjectSchema } from 'joi';
import { USER } from '@shared/common/constants';
import AppError from '@shared/infra/shared.exception';
import { IUsuarioCreate } from '@usuario/core/interface/usuario.interface';

export function createUsuarioValidateInput(input: IUsuarioCreate) {
  const schema: ObjectSchema<IUsuarioCreate> = Joi.object({
    kamachiqId: Joi.string().required().allow(null),
    identificationDocument: Joi.string().required().allow(null),
    name: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    gender: Joi.string()
      .valid(...USER.GENEDER)
      .required(),
    email: Joi.object({
      address: Joi.string().email().required(),
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
