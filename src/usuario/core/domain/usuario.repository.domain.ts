import { ObjectId } from 'mongoose';
import { IUsuario, IUsuarioIsUnique, IUsuarioCreate } from '../interface/usuario.interface';

export interface UsuarioRepository {
  findById(id: string): Promise<IUsuario | null>;
  find(input: IUsuarioIsUnique): Promise<IUsuario | null>;
  isUnique(input: IUsuarioIsUnique): Promise<boolean>;
  create(entry: IUsuarioCreate): Promise<ObjectId>;
}
