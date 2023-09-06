import { Schema } from 'mongoose';

export interface IUbigeo {
  name: string;
  departament: string;
  province: string;
  district: string;
  direction: string;
  referenceNotes?: string;
  latitude?: string;
  longitude?: string;
}

export const UbigeoSchema = new Schema<IUbigeo>({
  name: {
    type: String,
    required: true,
  },
  departament: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  referenceNotes: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});
