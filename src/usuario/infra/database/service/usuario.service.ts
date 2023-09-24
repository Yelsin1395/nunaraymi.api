import { ObjectId } from 'mongoose';
import { UsuarioRepository } from '@usuario/core/domain/usuario.repository.domain';
import { UsuarioService } from '@usuario/core/domain/usuario.service.domain';
import {
  IUsuario,
  IUsuarioIsUnique,
  IUsuarioCreate,
} from '@usuario/core/interface/usuario.interface';

export class UsuarioServiceImpl implements UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async findById(id: string): Promise<IUsuario | null> {
    return this.usuarioRepository.findById(id);
  }

  public async find(input: IUsuarioIsUnique): Promise<IUsuario | null> {
    return this.usuarioRepository.find(input);
  }

  public async isUnique(input: IUsuarioIsUnique): Promise<boolean> {
    return this.usuarioRepository.isUnique(input);
  }

  public async create(entry: IUsuarioCreate): Promise<ObjectId> {
    return this.usuarioRepository.create(entry);
  }
}
