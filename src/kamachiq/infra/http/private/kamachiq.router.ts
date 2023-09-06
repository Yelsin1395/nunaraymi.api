import { Router } from 'express';
import { KamachiqController } from '../kamachiq.controller';

interface IController {
  kamachiqController: KamachiqController;
}

export default function ({ kamachiqController }: IController) {
  const router = Router();

  router.post('/create', kamachiqController.create.bind(kamachiqController));

  return router;
}
