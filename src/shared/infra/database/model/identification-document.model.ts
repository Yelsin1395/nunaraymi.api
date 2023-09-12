import { Schema } from 'mongoose';
import { IDENTIFICATION_DOCUMENT } from '@shared/common/constants';

export interface IIdentificationDocument {
  type: string;
  number: string;
}

export const IdentificationDocument = new Schema<IIdentificationDocument>({
  type: {
    type: String,
    enum: { values: IDENTIFICATION_DOCUMENT.TYPES, message: '{VALUE} is not supported.' },
    requried: true,
  },
  number: {
    type: String,
    required: true,
  },
});
