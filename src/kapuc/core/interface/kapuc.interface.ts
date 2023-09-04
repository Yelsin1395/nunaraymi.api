import { Document } from 'mongoose';

export interface IKapuc extends Document {
  name: string;
  logoUrl?: string;
  ruc: string;
  domainUrl: string;
  enabled?: boolean;
  isDelete?: boolean;
}

export interface IKapucCreate {
  name: string;
  ruc: string;
  domainUrl: string;
}
