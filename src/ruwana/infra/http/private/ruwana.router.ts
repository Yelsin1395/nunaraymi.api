import { Router } from 'express';
import { authorize } from '@shared/middleware/roles.middlewares';
import { RuwanaController } from '../ruwana.controller';

interface IController {
  ruwanaController: RuwanaController;
}

export default function ({ ruwanaController }: IController) {
  const router = Router();

  router.post(
    '/create',
    authorize(['kapuc', 'kamachiq']),
    ruwanaController.create.bind(ruwanaController)
  );

  return router;
}
