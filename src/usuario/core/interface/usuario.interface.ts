import { Document, ObjectId } from 'mongoose';
import { IIdentificationDocument } from '@shared/infra/database/model/identification-document.model';
import { IUbigeo } from '@shared/infra/database/model/ubigeo.model';

export interface IUsuario extends Document {
  kapucId: ObjectId;
  kamachiqId?: ObjectId;
  imageUrl?: string;
  identificationDocument: IIdentificationDocument;
  name: string;
  lastName: string;
  fullName: string;
  gender: string;
  birthdate?: string;
  phone?: {
    code: string;
    number: string;
  };
  addresses?: IUbigeo[];
  email: {
    address: string;
    isConfirmed: boolean;
  };
  password: string;
  role: string;
  enabled?: boolean;
  isDelete?: boolean;
  toJSON(): IUsuario;
  comparePasswordUsuario(password: string): boolean;
  encryptPasswordUsuario(password: string): string;
}

export interface IUsuarioIsUnique {
  id?: string;
  identificationDocument?: IIdentificationDocument;
  email?: {
    address: string;
    isConfirmed?: boolean;
  };
}

export interface IUsuarioCreate {
  kamachiqId?: string;
  identificationDocument?: IIdentificationDocument;
  name: string;
  lastName: string;
  gender: string;
  email: {
    address: string;
    isConfirmed?: boolean;
  };
  password: string;
  role: string;
}

export interface IUsuarioAuth {
  email: {
    address: string;
    isConfirmed?: boolean;
  };
  password: string;
}
