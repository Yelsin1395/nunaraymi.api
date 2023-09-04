import { Request, Response } from 'express';
import { logger } from '@shared/infra/logger';

export default function (req: Request, res: Response): void {
  const messageNotFound = {
    status: 404,
    sucess: false,
    payload: { message: 'RESOURCE_NOT_FOUND' },
  };

  logger.error(JSON.stringify(messageNotFound));
  res.status(404).send(messageNotFound);
}
