import { Schema, model } from 'mongoose';
import { compareSync, hashSync, genSaltSync } from 'bcryptjs';
import { IdentificationDocument } from '@shared/infra/database/model/identification-document.model';
import { UbigeoSchema } from '@shared/infra/database/model/ubigeo.model';
import { USER } from '@shared/common/constants';
import regex from '@shared/common/regex';
import { IUsuario } from '@usuario/core/interface/usuario.interface';

const UsuarioSchema = new Schema<IUsuario>(
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
      default: null,
    },
    imageUrl: {
      type: String,
      match: regex.URL,
    },
    identificationDocument: IdentificationDocument,
    name: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      enum: { values: USER.GENEDER, message: '{VALUE} is not supported.' },
      required: true,
    },
    birthdate: {
      type: String,
    },
    phone: {
      code: String,
      number: String,
    },
    addresses: [UbigeoSchema],
    email: {
      address: {
        type: String,
        match: regex.email,
        required: true,
      },
      isConfirmed: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: { values: USER.ROLES, message: '{VALUE} is not supported.' },
      required: true,
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

UsuarioSchema.methods.toJSON = function () {
  /* eslint-disable */
  let usuario: any = this.toObject();
  usuario.password = '';
  return usuario;
  /* eslint-disable */
};

UsuarioSchema.methods.comparePasswordUsuario = function (password: string) {
  /* eslint-disable */
  const usuario: any = this;
  return compareSync(password, usuario.password);
  /* eslint-disable */
};

UsuarioSchema.methods.encryptPasswordUsuario = function (password: string) {
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);
  return hashedPassword;
};

UsuarioSchema.pre('save', async function (next) {
  /* eslint-disable */
  const usuario: any = this;

  if (!usuario.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(usuario.password, salt);
  usuario.password = hashedPassword;
  next();
  /* eslint-disable */
});

UsuarioSchema.pre('findOneAndUpdate', async function (next) {
  /* eslint-disable */
  let usuario: any = this;

  if (!usuario._update.password) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(usuario._update.password, salt);
  usuario._update.password = hashedPassword;
  next();
  /* eslint-disable */
});

export default model<IUsuario>('usuario', UsuarioSchema);
