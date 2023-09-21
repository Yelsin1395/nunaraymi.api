import { Router } from 'express';
import cacheMiddleware from '@shared/middleware/cache.middleware';
import { CACHE_TIME } from '@shared/common/constants';
import { KapucController } from '../kapuc.controller';

interface IControllers {
  kapucController: KapucController;
}

export default function ({ kapucController }: IControllers) {
  const router = Router();

  router.get(
    '/:id',
    [cacheMiddleware(CACHE_TIME.TWELVE_HR)],
    kapucController.findById.bind(kapucController)
  );

  return router;
}
