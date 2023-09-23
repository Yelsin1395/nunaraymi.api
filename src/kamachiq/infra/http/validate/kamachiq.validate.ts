import Joi, { ObjectSchema } from 'joi';
import { ubigeoSchemaValidate } from '@shared/infra/http/validate/common/ubigeo.schema';
import { currencySchemaValidate } from '@shared/infra/http/validate/common/currency.schema';
import { INVOICE } from '@shared/common/constants';
import AppError from '@shared/infra/shared.exception';
import regex from '@shared/common/regex';
import { IKamachiqCreate } from '@kamachiq/core/interface/kamachiq.interface';

export function createKamachiqValidateInput(input: IKamachiqCreate) {
  const schema: ObjectSchema<IKamachiqCreate> = Joi.object({
    ruc: Joi.string().regex(regex.ruc).required(),
    name: Joi.string().required(),
    billingType: Joi.string()
      .valid(...INVOICE.TYPES)
      .required(),
    address: ubigeoSchemaValidate,
    currency: currencySchemaValidate,
  });

  const { error } = schema.validate(input);

  if (error) {
    throw new AppError(400, 'ERROR_REQUEST_VALIDATE_INPUT', error.details[0].message);
  }
}
