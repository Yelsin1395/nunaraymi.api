import { NextFunction, Request, Response } from 'express';

export default function (error: any, req: Request, res: Response, next: NextFunction): void {
  if (error.code || error.name.includes('ValidationError')) {
    const httpStatus = error.status || 400;
    res.status(httpStatus).send({
      status: httpStatus,
      sucess: false,
      payload: {
        code: error.code,
        message: error.message,
        moreInfoError: error.stack,
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
