import { Router } from 'express';
import { RuwanaController } from '../ruwana.controller';

interface IController {
  ruwanaController: RuwanaController;
}

export default function ({ ruwanaController }: IController) {
  const router = Router();

  router.get('/:id', ruwanaController.findById.bind(ruwanaController));

  return router;
}
