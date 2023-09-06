import AppError from '@shared/infra/shared.exception';
import { KamachiqService } from '@kamachiq/core/domain/kamachiq.service.domain';
import { IKamachiqCreate } from '@kamachiq/core/interface/kamachiq.interface';

export class KamachiqCreateUseCase {
  constructor(
    private readonly kamachiqService: KamachiqService,
    private readonly inSite: string
  ) {}

  public async execute(input: IKamachiqCreate) {
    // Validacion del site
    console.log(this.inSite);

    if (!(await this.kamachiqService.isUnique({ ruc: input.ruc }))) {
      throw new AppError(400, 'ERROR_KAMACHIQ_TAKEN', 'Kamachiq has been taken');
    }

    return this.kamachiqService.create(input);
  }
}
