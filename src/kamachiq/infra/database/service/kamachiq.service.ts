import { ObjectId } from 'mongoose';
import { KamachiqRepository } from '@kamachiq/core/domain/kamachiq.repository.domain';
import { KamachiqService } from '@kamachiq/core/domain/kamachiq.service.domain';
import {
  IKamachiq,
  IKamachiqIsUnique,
  IKamachiqCreate,
} from '@kamachiq/core/interface/kamachiq.interface';

export class KamachiqServiceImpl implements KamachiqService {
  constructor(private readonly kamachiqRepository: KamachiqRepository) {}

  public async findById(id: string): Promise<IKamachiq | null> {
    return this.kamachiqRepository.findById(id);
  }

  public async isUnique(input: IKamachiqIsUnique): Promise<boolean> {
    return this.kamachiqRepository.isUnique(input);
  }

  public async create(entry: IKamachiqCreate): Promise<ObjectId> {
    return this.kamachiqRepository.create(entry);
  }
}
