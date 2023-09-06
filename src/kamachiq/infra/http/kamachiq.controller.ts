import { Request, Response } from 'express';
import { responseCreate, responseOk } from '@shared/common/response';

import { KamachiqQueryUseCase } from '@kamachiq/app/use-case/kamachiq-query.use-case';
import { KamachiqCreateUseCase } from '@kamachiq/app/use-case/kamachiq-create.use-case';

import { createKamachiqValidateInput } from './validate/kamachiq.validate';

export class KamachiqController {
  constructor(
    private readonly kamachiqQueryUseCase: KamachiqQueryUseCase,
    private readonly kamachiqCreateUseCase: KamachiqCreateUseCase
  ) {}

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    responseOk(res, await this.kamachiqQueryUseCase.findById(id));
  }

  async create(req: Request, res: Response): Promise<void> {
    createKamachiqValidateInput(req.body);
    const result = await this.kamachiqCreateUseCase.execute(req.body);
    responseCreate(res, result);
  }
}
