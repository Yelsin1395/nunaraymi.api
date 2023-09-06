import { Document, ObjectId } from 'mongoose';
import { ICurrency } from '@shared/infra/database/model/currency.model';
import { IUbigeo } from '@shared/infra/database/model/ubigeo.model';

export interface IKamachiq extends Document {
  kapucId: ObjectId;
  ruc: string;
  name: string;
  logoUrl?: string;
  billingType: string;
  address: IUbigeo;
  currency: ICurrency;
  published?: string;
  isVerify?: boolean;
  enabled?: boolean;
  isDelete?: boolean;
}

export interface IKamachiqIsUnique {
  id?: ObjectId;
  ruc: string;
  name?: string;
  isDelete?: string;
}

export interface IKamachiqCreate {
  // kapucId?: ObjectId;
  ruc: string;
  name: string;
  billingType: string;
  address: IUbigeo;
  currency: ICurrency;
}
