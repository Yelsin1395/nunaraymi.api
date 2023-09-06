import { Schema, model } from 'mongoose';
import { CurrencySchema } from '@shared/infra/database/model/currency.model';
import { UbigeoSchema } from '@shared/infra/database/model/ubigeo.model';
import { INVOICE } from '@shared/common/constants';
import regex from '@shared/common/regex';
import { IKamachiq } from '@kamachiq/core/interface/kamachiq.interface';

const KamachiqSchema = new Schema<IKamachiq>(
  {
    kapucId: {
      type: Schema.Types.ObjectId,
      index: true,
      ref: 'kapuc',
      required: true,
    },
    ruc: {
      type: String,
      unique: true,
      match: regex.ruc,
      required: true,
    },
    name: {
      type: String,
      index: true,
      required: true,
      trim: true,
    },
    logoUrl: {
      type: String,
      match: regex.URL,
      default: null,
    },
    billingType: {
      type: String,
      enum: { values: INVOICE.TYPES, message: '{VALUE} is not supported.' },
      required: true,
    },
    address: UbigeoSchema,
    currency: CurrencySchema,
    published: {
      type: String,
      enum: { values: ['no', 'yes', 'future'], message: '{VALUE} is not supported.' },
      default: 'no',
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<IKamachiq>('kamachiq', KamachiqSchema);
