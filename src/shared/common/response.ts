import { Response } from 'express';

export function responseOk(res: Response, data: any) {
  res.status(200).send({ status: 200, sucess: true, payload: data });
}

export function responseCreate(res: Response, id: any) {
  res.status(201).send({ status: 201, sucess: true, payload: { newId: id } });
}
