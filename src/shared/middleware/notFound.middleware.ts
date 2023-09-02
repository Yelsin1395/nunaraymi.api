import { Request, Response } from 'express';

export default function (req: Request, res: Response): void {
  res.status(404).send({ status: 404, sucess: false, payload: { message: 'RESOURCE_NOT_FOUND' } });
}
