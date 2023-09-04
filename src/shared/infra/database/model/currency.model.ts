import { Schema } from 'mongoose';

export interface ICurrency {
  code: string;
  symbol: string;
}

export const CurrencySchema = new Schema<ICurrency>({
  code: {
    type: String,
    enum: {
      values: ['PEN', 'USD'],
      message: '{VALUE} is not supported',
    },
    default: 'PEN',
    required: true,
  },
  symbol: {
    type: String,
    enum: ['S/', '$'],
    default: 'S/',
    required: true,
  },
});
