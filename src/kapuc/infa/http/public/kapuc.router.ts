import { Router } from 'express';

import { KapucController } from '../kapuc.controller';

interface IControllers {
  kapucController: KapucController;
}

export default function ({ kapucController }: IControllers) {
  const router = Router();

  router.get('/:id', kapucController.findById.bind(kapucController));

  return router;
}
