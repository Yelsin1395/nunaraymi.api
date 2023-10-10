import { BehaviorSubject } from 'rxjs';
import AppError from '@shared/infra/shared.exception';
import { IAuditUsuario } from '@shared/common/audit';
import kapuc from '@kapuc/infa/export';
import kamachiq from '@kamachiq/infra/export';
import usuario from '@usuario/infra/export';
import { RuwanaService } from '@ruwana/core/domain/ruwana.service.domain';
import { IRuwanaCreate } from '@ruwana/core/interface/ruwana.interface';

export class RuwanaCreateUseCase {
  constructor(
    private readonly ruwanaService: RuwanaService,
    private readonly inSite: BehaviorSubject<string>,
    private readonly auditUserInfo: BehaviorSubject<IAuditUsuario>
  ) {}

  public async execute(input: IRuwanaCreate) {
    if (!(await kapuc.service.findById(this.inSite.getValue()))) {
      throw new AppError(400, 'ERROR_KAPUC_UNRESOLVED', 'Kapuc could not be resolved');
    }

    if (!(await kamachiq.service.findById(String(input.kamachiqId)))) {
      throw new AppError(400, 'ERROR_KAMACHIQ_UNRESOLVED', 'Kamachiq could not be resolved');
    }

    if (!(await usuario.service.findById(this.auditUserInfo.getValue().id))) {
      throw new AppError(400, 'ERROR_USUARIO_UNRESOLVED', 'Usuario could not be resolved');
    }

    if (!(await this.ruwanaService.isUnique({ name: input.name }))) {
      throw new AppError(400, 'ERROR_RUWANA_NAME_TAKEN', 'The name by ruwana already exisist');
    }

    return this.ruwanaService.create(input);
  }
}
