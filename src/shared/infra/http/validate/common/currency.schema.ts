import Joi, { ObjectSchema } from 'joi';
import { ICurrency } from '@shared/infra/database/model/currency.model';
import { CURRENCY } from '@shared/common/constants';

export const currencySchemaValidate: ObjectSchema<ICurrency> = Joi.object({
  code: Joi.string()
    .valid(...CURRENCY.CODE)
    .required(),
  symbol: Joi.string()
    .valid(...CURRENCY.SYMBOL)
    .required(),
});
