import { KapucService } from '@kapuc/core/domain/kapuc.service.domain';
import { IKapucCreate } from '@kapuc/core/interface/kapuc.interface';

export class KapucCreateUseCase {
  constructor(private readonly kapucService: KapucService) {}

  public async execute(input: IKapucCreate) {
    return this.kapucService.create({
      name: input.name,
      ruc: input.ruc,
      domainUrl: input.domainUrl,
    });
  }
}
