import { BehaviorSubject } from 'rxjs';
import { generate } from '@shared/common/jwtHelpers';
import AppError from '@shared/infra/shared.exception';
import kapuc from '@kapuc/infa/export';
import { UsuarioService } from '@usuario/core/domain/usuario.service.domain';
import { IUsuarioAuth } from '@usuario/core/interface/usuario.interface';

export class UsuarioAuthUseCase {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly inSite: BehaviorSubject<string>
  ) {}

  public async execute(input: IUsuarioAuth) {
    if (!(await kapuc.service.findById(this.inSite.getValue()))) {
      throw new AppError(400, 'ERROR_KAPUC_UNRESOLVED', 'Kapuc could not be resolved');
    }

    const usuario = await this.usuarioService.find(input);

    if (!usuario) {
      throw new AppError(400, 'ERROR_AUTH_USER_NOT_EXIST', 'The user not register');
    }

    const validatePassword = usuario.comparePasswordUsuario(input.password);

    if (!validatePassword) {
      throw new AppError(400, 'ERROR_AUTH_PASSWORD_INVALID', 'The password by user is invalid');
    }

    const toEncode = {
      kapucId: usuario.kapucId,
      kamachiqId: usuario.kamachiqId,
      identificationDocument: usuario.identificationDocument,
      name: usuario.name,
      lastName: usuario.lastName,
      fullName: usuario.fullName,
      gender: usuario.gender,
      birthdate: usuario.birthdate,
      phone: usuario.phone,
      addresses: usuario.addresses,
      email: usuario.email,
      role: usuario.role,
      enabled: usuario.enabled,
    };

    return { token: generate(toEncode) };
  }
}
