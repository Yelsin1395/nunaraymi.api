import { ObjectId, Model } from 'mongoose';
import { BehaviorSubject } from 'rxjs';
import { IAuditUsuario } from '@shared/common/audit';
import { RuwanaRepository } from '@ruwana/core/domain/ruwana.repository.domain';
import { RUWANA } from '@shared/common/constants';
import { IRuwana, IRuwanaIsUnique, IRuwanaCreate } from '@ruwana/core/interface/ruwana.interface';

export class RuwanaRepositoryImpl implements RuwanaRepository {
  constructor(
    private readonly runawa: Model<IRuwana>,
    private readonly inSite: BehaviorSubject<string>,
    private readonly auditUserInfo: BehaviorSubject<IAuditUsuario>
  ) {}

  public async findById(kamachiqId: string, id: string): Promise<IRuwana | null> {
    return this.runawa.findOne({
      kapucId: this.inSite.getValue(),
      kamachiqId,
      _id: id,
      isDelete: false,
    });
  }

  public async isUnique(input: IRuwanaIsUnique): Promise<boolean> {
    const fields = {
      kapucId: this.inSite.getValue(),
      ...(input.id && { _id: input.id }),
      name: input.name,
    };

    return (await this.runawa.countDocuments(fields)) === 0;
  }

  public async create(entry: IRuwanaCreate): Promise<ObjectId> {
    const entity = {
      kapucId: this.inSite.getValue(),
      kamachiqId: entry.kamachiqId,
      name: entry.name,
      synopsis: entry.synopsis,
      date: entry.date,
      time: entry.time,
      bannerUrl: entry.bannerUrl,
      videoUrl: entry.videoUrl,
      target: entry.target,
      restricted: entry.target === RUWANA.TARGETS.pop(),
      address: entry.address,
      createBy: this.auditUserInfo.getValue().id,
    };

    const result = await this.runawa.create(entity);
    return result._id;
  }
}
