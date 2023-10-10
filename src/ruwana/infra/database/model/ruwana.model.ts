import { Schema, model } from 'mongoose';
import { UbigeoSchema } from '@shared/infra/database/model/ubigeo.model';
import { RUWANA } from '@shared/common/constants';
import regex from '@shared/common/regex';
import { IRuwana } from '@ruwana/core/interface/ruwana.interface';

const RuwanaSchema = new Schema<IRuwana>(
  {
    kapucId: {
      type: Schema.Types.ObjectId,
      index: true,
      ref: 'kapuc',
      required: true,
    },
    kamachiqId: {
      type: Schema.Types.ObjectId,
      index: true,
      ref: 'kamachiq',
      required: true,
    },
    name: {
      type: String,
      index: true,
      unique: true,
      trim: true,
      required: true,
    },
    synopsis: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    bannerUrl: {
      type: String,
      match: regex.URL,
      required: true,
    },
    videoUrl: {
      type: String,
      match: regex.URL,
      required: true,
    },
    target: {
      type: String,
      enum: { values: RUWANA.TARGETS, message: '{VALUE} is not supported.' },
      required: true,
    },
    restricted: {
      type: Boolean,
      required: true,
    },
    address: UbigeoSchema,
    createBy: {
      type: Schema.Types.ObjectId,
      index: true,
      ref: 'usuario',
      required: true,
    },
    published: {
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

export default model<IRuwana>('ruwana', RuwanaSchema);
