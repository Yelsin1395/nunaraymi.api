import AppError from '@shared/infra/shared.exception';
import { RuwanaService } from '@ruwana/core/domain/ruwana.service.domain';

export class RuwanaQueryUseCase {
  constructor(private readonly ruwanaService: RuwanaService) {}

  public async findById(kamachiqId: string, id: string) {
    const ruwanaDb = await this.ruwanaService.findById(kamachiqId, id);

    if (!ruwanaDb) {
      throw new AppError(404, 'ERROR_NOT_FOUND_RUWANA_ENTITY', 'Ruwana could not be found');
    }

    return ruwanaDb;
  }
}
