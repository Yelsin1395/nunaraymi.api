import { ObjectId, Model } from 'mongoose';
import { KapucRepository } from '@kapuc/core/domain/kapuc.repository.domain';
import { IKapuc, IKapucCreate } from '@kapuc/core/interface/kapuc.interface';

export class KapucRepositoryImpl implements KapucRepository {
  constructor(private readonly kapucModel: Model<IKapuc>) {}

  public async findById(id: string): Promise<IKapuc | null> {
    return this.kapucModel.findById(id);
  }

  public async create(entry: IKapucCreate): Promise<ObjectId> {
    const entity = {
      name: entry.name,
      ruc: entry.ruc,
      domainUrl: entry.domainUrl,
    };

    const result = await this.kapucModel.create(entity);
    return result._id;
  }
}
