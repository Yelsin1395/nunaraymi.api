import AppError from '@shared/infra/shared.exception';
import { KamachiqService } from '@kamachiq/core/domain/kamachiq.service.domain';

export class KamachiqQueryUseCase {
  constructor(private readonly kamachiqService: KamachiqService) {}

  public async findById(id: string) {
    const kamachiqDb = await this.kamachiqService.findById(id);

    if (!kamachiqDb) {
      throw new AppError(404, 'ERROR_NOT_FOUND_KAMACHIQ_ENTITY', 'Kamachiq could not be found');
    }

    return kamachiqDb;
  }
}
