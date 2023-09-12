import { USER } from '@shared/common/constants';
import AppError from '@shared/infra/shared.exception';
import kapuc from '@kapuc/infa/export';
import kamachiq from '@kamachiq/infra/export';
import { UsuarioService } from '@usuario/core/domain/usuario.service.domain';
import { IUsuarioCreate } from '@usuario/core/interface/usuario.interface';

export class UsuarioCreateUseCase {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly inSite: string
  ) {}

  public async execute(input: IUsuarioCreate) {
    if (!(await kapuc.service.findById(this.inSite))) {
      throw new AppError(400, 'ERROR_KAPUC_UNRESOLVED', 'Kapuc could not be resolved');
    }

    if (input.kamachiqId) {
      if (!(await kamachiq.service.findById(String(input.kamachiqId)))) {
        throw new AppError(400, 'ERROR_KAMACHIQ_UNRESOLVED', 'Kamachiq could not be resolved');
      }
    }

    if (
      !(await this.usuarioService.isUnique({
        email: input.email,
      }))
    ) {
      throw new AppError(400, 'ERROR_USUARIO_TAKEN', 'Usuario has been taken');
    }

    input.email = {
      address: input.email.address,
      isConfirmed: USER.ROLES.find((u) => u === input.role) === 'kapuc',
    };

    return this.usuarioService.create(input);
  }
}
