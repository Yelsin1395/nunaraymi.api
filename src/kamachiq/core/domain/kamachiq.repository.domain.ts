import { ObjectId } from 'mongoose';
import { IKamachiq, IKamachiqIsUnique, IKamachiqCreate } from '../interface/kamachiq.interface';

export interface KamachiqRepository {
  findById(id: string): Promise<IKamachiq | null>;
  isUnique(input: IKamachiqIsUnique): Promise<boolean>;
  create(entry: IKamachiqCreate): Promise<ObjectId>;
}
