import Joi, { ObjectSchema } from 'joi';
import { IUbigeo } from '@shared/infra/database/model/ubigeo.model';

export const ubigeoSchemaValidate: ObjectSchema<IUbigeo> = Joi.object({
  name: Joi.string().required(),
  departament: Joi.string().required(),
  province: Joi.string().required(),
  district: Joi.string().required(),
  direction: Joi.string().required(),
  referenceNotes: Joi.string().required(),
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
});
