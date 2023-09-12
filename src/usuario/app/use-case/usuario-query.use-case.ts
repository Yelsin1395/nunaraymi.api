import AppError from '@shared/infra/shared.exception';
import { UsuarioService } from '@usuario/core/domain/usuario.service.domain';

export class UsuarioQueryUseCase {
  constructor(private readonly usuarioService: UsuarioService) {}

  public async findById8(id: string) {
    const usuarioDb = await this.usuarioService.findById(id);

    if (!usuarioDb) {
      throw new AppError(404, 'ERROR_NOT_FOUND_USUARIO_ENTITY', 'Usuario could not be found');
    }

    return usuarioDb;
  }
}
