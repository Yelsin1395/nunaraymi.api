import { ObjectId } from 'mongoose';
import { KapucRepository } from '@kapuc/core/domain/kapuc.repository.domain';
import { KapucService } from '@kapuc/core/domain/kapuc.service.domain';
import { IKapuc, IKapucCreate } from '@kapuc/core/interface/kapuc.interface';

export class KapucServiceImpl implements KapucService {
  constructor(private readonly kapucRepository: KapucRepository) {}

  public async findById(id: string): Promise<IKapuc | null> {
    return this.kapucRepository.findById(id);
  }

  public async create(entry: IKapucCreate): Promise<ObjectId> {
    return this.kapucRepository.create(entry);
  }
}
