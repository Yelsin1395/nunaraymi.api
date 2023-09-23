import Joi, { ObjectSchema } from 'joi';
import { IIdentificationDocument } from '@shared/infra/database/model/identification-document.model';
import { IDENTIFICATION_DOCUMENT } from '@shared/common/constants';

export const identificationDocumentSchema: ObjectSchema<IIdentificationDocument> = Joi.object({
  type: Joi.string()
    .valid(...IDENTIFICATION_DOCUMENT.TYPES)
    .required(),
  number: Joi.string().required(),
});
