import AppError from '@shared/infra/shared.exception';
import { KapucService } from '@kapuc/core/domain/kapuc.service.domain';

export class KapucQueryUseCase {
  constructor(private readonly kapucService: KapucService) {}

  public async findById(id: string) {
    const kapucDb = await this.kapucService.findById(id);

    if (!kapucDb) {
      throw new AppError(404, 'ERROR_NOT_FOUND_KAPUC_ENTITY', 'Kapuc could not be found');
    }

    return kapucDb;
  }
}
