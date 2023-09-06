import { Router } from 'express';
import { KamachiqController } from '../kamachiq.controller';

interface IController {
  kamachiqController: KamachiqController;
}

export default function ({ kamachiqController }: IController) {
  const router = Router();

  router.get('/:id', kamachiqController.findById.bind(kamachiqController));

  return router;
}
