import { ObjectId } from 'mongoose';
import { IRuwana, IRuwanaIsUnique, IRuwanaCreate } from '../interface/ruwana.interface';

export interface RuwanaRepository {
  findById(kamachiqId: string, id: string): Promise<IRuwana | null>;
  isUnique(input: IRuwanaIsUnique): Promise<boolean>;
  create(entry: IRuwanaCreate): Promise<ObjectId>;
}
