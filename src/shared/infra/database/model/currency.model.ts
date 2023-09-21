import { CURRENCY } from '@shared/common/constants';

export interface ICurrency {
  code: string;
  symbol: string;
}

export const CurrencySchema = {
  code: {
    type: String,
    enum: {
      values: CURRENCY.CODE,
      message: '{VALUE} is not supported',
    },
    default: 'PEN',
    required: true,
  },
  symbol: {
    type: String,
    enum: CURRENCY.SYMBOL,
    default: 'S/',
    required: true,
  },
};
