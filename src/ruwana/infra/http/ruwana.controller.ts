import { Request, Response } from 'express';
import { responseCreate, responseOk } from '@shared/common/response';

import { RuwanaQueryUseCase } from '@ruwana/app/use-case/ruwana-query.use-case';
import { RuwanaCreateUseCase } from '@ruwana/app/use-case/ruwana-create.use-case';

import { createRuwanaValidateInput } from './validate/ruwana.validate';

export class RuwanaController {
  constructor(
    private readonly ruwanaQueryUseCase: RuwanaQueryUseCase,
    private readonly ruwanaCreateUseCase: RuwanaCreateUseCase
  ) {}

  async findById(req: Request, res: Response): Promise<void> {
    const { kamachiqId, id } = req.params;
    responseOk(res, await this.ruwanaQueryUseCase.findById(kamachiqId, id));
  }

  async create(req: Request, res: Response): Promise<void> {
    createRuwanaValidateInput(req.body);
    const result = await this.ruwanaCreateUseCase.execute(req.body);
    responseCreate(res, result);
  }
}
