import { ObjectId, Model } from 'mongoose';
import { KamachiqRepository } from '@kamachiq/core/domain/kamachiq.repository.domain';
import {
  IKamachiq,
  IKamachiqIsUnique,
  IKamachiqCreate,
} from '@kamachiq/core/interface/kamachiq.interface';

export class KamachiqRepositoryImpl implements KamachiqRepository {
  constructor(
    private readonly kamachiq: Model<IKamachiq>,
    private readonly inSite: string
  ) {}

  public async findById(id: string): Promise<IKamachiq | null> {
    return this.kamachiq.findOne({ kapucId: this.inSite, _id: id });
  }

  public async isUnique(input: IKamachiqIsUnique): Promise<boolean> {
    const fileds = {
      kapucId: this.inSite,
      ...(input.id && { _id: input.id }),
      ruc: input.ruc,
      ...(input.name && { name: input.name }),
      isDelete: false,
    };

    return (await this.kamachiq.countDocuments(fileds)) === 0;
  }

  public async create(entry: IKamachiqCreate): Promise<ObjectId> {
    const entity = {
      kapucId: null,
      ruc: entry.ruc,
      name: entry.name,
      billingType: entry.billingType,
      address: entry.address,
      currency: entry.currency,
    };

    const result = await this.kamachiq.create(entity);
    return result._id;
  }
}
