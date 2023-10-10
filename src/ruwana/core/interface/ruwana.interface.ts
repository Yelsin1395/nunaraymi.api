import { Document, ObjectId } from 'mongoose';
import { IUbigeo } from '@shared/infra/database/model/ubigeo.model';

export interface IRuwana extends Document {
  kapucId: ObjectId;
  kamachiqId: ObjectId;
  name: string;
  synopsis: string;
  date: Date;
  time: string;
  bannerUrl: string;
  videoUrl?: string;
  target: string;
  restricted: boolean;
  address: IUbigeo;
  createBy: ObjectId;
  published: boolean;
  enabled: boolean;
  isDelete?: boolean;
}

export interface IRuwanaIsUnique {
  id?: string;
  name: string;
}

export interface IRuwanaCreate {
  kamachiqId: string;
  name: string;
  synopsis: string;
  date: Date;
  time: string;
  bannerUrl: string;
  videoUrl?: string;
  target: string;
  address: IUbigeo;
}
