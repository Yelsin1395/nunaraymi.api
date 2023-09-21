export interface IUbigeo {
  name?: string;
  departament: string;
  province: string;
  district: string;
  direction: string;
  referenceNotes?: string;
  latitude?: string;
  longitude?: string;
  default?: boolean;
}

export const UbigeoSchema = {
  name: {
    type: String,
    default: null,
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
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    default: false,
  },
};
