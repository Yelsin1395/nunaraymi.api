import { NextFunction, Request, Response } from 'express';
import { logger } from '@shared/infra/logger';

export default function (error: any, req: Request, res: Response, next: NextFunction): void {
  console.error(error);
  logger.error(JSON.stringify(error));

  if (error.code || error.name.includes('ValidationError')) {
    const httpStatus = error.status || 400;
    res.status(httpStatus).send({
      status: httpStatus,
      sucess: false,
      payload: {
        code: error.code,
        message: error.message,
      },
    });
  } else {
    res.status(500).send({
      status: 500,
      sucess: false,
      payload: {
        code: 'INTERNAL_SERVER_ERROR',
      },
    });
  }

  next();
}
