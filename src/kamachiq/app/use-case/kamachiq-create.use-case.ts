import { BehaviorSubject } from 'rxjs';
import AppError from '@shared/infra/shared.exception';
import kapuc from '@kapuc/infa/export';
import { KamachiqService } from '@kamachiq/core/domain/kamachiq.service.domain';
import { IKamachiqCreate } from '@kamachiq/core/interface/kamachiq.interface';

export class KamachiqCreateUseCase {
  constructor(
    private readonly kamachiqService: KamachiqService,
    private readonly inSite: BehaviorSubject<string>
  ) {}

  public async execute(input: IKamachiqCreate) {
    if (!(await kapuc.service.findById(this.inSite.getValue()))) {
      throw new AppError(400, 'ERROR_KAPUC_UNRESOLVED', 'Kapuc could not be resolved');
    }

    if (!(await this.kamachiqService.isUnique({ ruc: input.ruc }))) {
      throw new AppError(400, 'ERROR_KAMACHIQ_TAKEN', 'Kamachiq has been taken');
    }

    return this.kamachiqService.create(input);
  }
}
