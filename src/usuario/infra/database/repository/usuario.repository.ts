import { ObjectId, Model } from 'mongoose';
import { UsuarioRepository } from '@usuario/core/domain/usuario.repository.domain';
import {
  IUsuario,
  IUsuarioIsUnique,
  IUsuarioCreate,
} from '@usuario/core/interface/usuario.interface';

export class UsuarioRepositoryImpl implements UsuarioRepository {
  constructor(
    private readonly usuario: Model<IUsuario>,
    private readonly inSite: string
  ) {}

  public async findById(id: string): Promise<IUsuario | null> {
    return this.usuario.findOne({ kapucId: this.inSite, _id: id, isDelete: false });
  }

  public async isUnique(input: IUsuarioIsUnique): Promise<boolean> {
    const fields = {
      kapucId: this.inSite,
      ...(input.id && { _id: input.id }),
      ...(input.identificationDocument && { identificationDocument: input.identificationDocument }),
      email: {
        address: input.email.address,
      },
      isDelete: false,
    };

    return (await this.usuario.countDocuments(fields)) === 0;
  }

  public async create(entry: IUsuarioCreate): Promise<ObjectId> {
    const entity = {
      kapucId: this.inSite,
      ...(entry.kamachiqId && { kamachiqId: entry.kamachiqId }),
      identificationDocument: entry.identificationDocument,
      name: entry.name,
      lastName: entry.lastName,
      fullName: `${entry.lastName} ${entry.lastName}`,
      gender: entry.gender,
      email: entry.email,
      password: entry.password,
      role: entry.role,
    };

    const result = await this.usuario.create(entity);
    return result._id;
  }
}
