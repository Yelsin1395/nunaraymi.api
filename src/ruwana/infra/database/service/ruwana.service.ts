import { ObjectId } from 'mongoose';
import { RuwanaRepository } from '@ruwana/core/domain/ruwana.repository.domain';
import { RuwanaService } from '@ruwana/core/domain/ruwana.service.domain';
import { IRuwana, IRuwanaIsUnique, IRuwanaCreate } from '@ruwana/core/interface/ruwana.interface';

export class RuwanaServiceImpl implements RuwanaService {
  constructor(private readonly ruwanaRepository: RuwanaRepository) {}

  public async findById(kamachiqId: string, id: string): Promise<IRuwana | null> {
    return this.ruwanaRepository.findById(kamachiqId, id);
  }

  public async isUnique(input: IRuwanaIsUnique): Promise<boolean> {
    return this.ruwanaRepository.isUnique(input);
  }

  public async create(entry: IRuwanaCreate): Promise<ObjectId> {
    return this.ruwanaRepository.create(entry);
  }
}
