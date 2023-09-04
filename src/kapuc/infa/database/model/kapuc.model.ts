import { Schema, model } from 'mongoose';
import regex from '@shared/common/regex';
import { IKapuc } from '@kapuc/core/interface/kapuc.interface';

const KapucSchema = new Schema<IKapuc>(
  {
    name: {
      unique: true,
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      match: regex.URL,
      default: null,
    },
    ruc: {
      unique: true,
      type: String,
      match: regex.ruc,
      required: true,
    },
    domainUrl: {
      index: true,
      type: String,
      match: regex.URL,
      default: null,
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

export default model<IKapuc>('kapuc', KapucSchema);
