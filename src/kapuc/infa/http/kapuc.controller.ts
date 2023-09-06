import { Request, Response } from 'express';
import { responseCreate, responseOk } from '@shared/common/response';

import { KapucQueryUseCase } from '@kapuc/app/use-case/kapuc-query.use-case';
import { KapucCreateUseCase } from '@kapuc/app/use-case/kapuc-create.use-case';

import { createKapucValidateInput } from './validate/kapucInput.validate';

export class KapucController {
  constructor(
    private readonly kapucQueryUseCase: KapucQueryUseCase,
    private readonly kapucCreateUseCase: KapucCreateUseCase
  ) {}

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    responseOk(res, await this.kapucQueryUseCase.findById(id));
  }

  async create(req: Request, res: Response): Promise<void> {
    createKapucValidateInput(req.body);
    const result = await this.kapucCreateUseCase.execute(req.body);
    responseCreate(res, result);
  }
}
