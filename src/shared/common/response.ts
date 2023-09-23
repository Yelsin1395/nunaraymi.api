import { Response } from 'express';
import { logger } from '@shared/infra/logger';

export function responseOk(res: Response, data: any) {
  logger.info(`Output: ${JSON.stringify(data)}`);
  res.status(200).send({ status: 200, sucess: true, payload: data });
}

export function responseCreate(res: Response, id: any) {
  logger.info(`Output: ${id}`);
  res.status(201).send({ status: 201, sucess: true, payload: { newId: id } });
}
