import { Router } from 'express';
import { KapucController } from '../kapuc.controller';

interface IControllers {
  kapucController: KapucController;
}

export default function ({ kapucController }: IControllers) {
  const router = Router();

  router.post('/create', kapucController.create.bind(kapucController));

  return router;
}
