import { Request, Response } from 'express';
import { responseCreate, responseOk } from '@shared/common/response';

import { UsuarioQueryUseCase } from '@usuario/app/use-case/usuario-query.use-case';
import { UsuarioCreateUseCase } from '@usuario/app/use-case/usuario-create.use-case';

import { createUsuarioValidateInput } from './validate/usuario.validate';

export class UsuarioController {
  constructor(
    private readonly usuarioQueryUseCase: UsuarioQueryUseCase,
    private readonly usuarioCreateUseCase: UsuarioCreateUseCase
  ) {}

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    responseOk(res, await this.usuarioQueryUseCase.findById8(id));
  }

  async create(req: Request, res: Response): Promise<void> {
    createUsuarioValidateInput(req.body);
    const result = await this.usuarioCreateUseCase.execute(req.body);
    responseCreate(res, result);
  }
}
