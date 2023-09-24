import { ObjectId, Model } from 'mongoose';
import { BehaviorSubject } from 'rxjs';
import { UsuarioRepository } from '@usuario/core/domain/usuario.repository.domain';
import {
  IUsuario,
  IUsuarioIsUnique,
  IUsuarioCreate,
} from '@usuario/core/interface/usuario.interface';

export class UsuarioRepositoryImpl implements UsuarioRepository {
  constructor(
    private readonly usuario: Model<IUsuario>,
    private readonly inSite: BehaviorSubject<string>
  ) {}

  public async findById(id: string): Promise<IUsuario | null> {
    return this.usuario.findOne({ kapucId: this.inSite.getValue(), _id: id, isDelete: false });
  }

  public async find(input: IUsuarioIsUnique): Promise<IUsuario | null> {
    const fields = {
      kapucId: this.inSite.getValue(),
      ...(input.email && { 'email.address': input.email.address }),
      isDelete: false,
    };
    return this.usuario.findOne(fields);
  }

  public async isUnique(input: IUsuarioIsUnique): Promise<boolean> {
    const fields = {
      kapucId: this.inSite.getValue(),
      ...(input.id && { _id: input.id }),
      ...(input.identificationDocument && { identificationDocument: input.identificationDocument }),
      ...(input.email && { 'email.address': input.email.address }),
      isDelete: false,
    };

    return (await this.usuario.countDocuments(fields)) === 0;
  }

  public async create(entry: IUsuarioCreate): Promise<ObjectId> {
    const entity = {
      kapucId: this.inSite.getValue(),
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
