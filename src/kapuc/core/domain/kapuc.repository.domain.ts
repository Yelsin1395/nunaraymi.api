import { ObjectId } from 'mongoose';
import { IKapuc, IKapucCreate } from '../interface/kapuc.interface';

export interface KapucRepository {
  findById(id: string): Promise<IKapuc | null>;
  create(entry: IKapucCreate): Promise<ObjectId>;
}
