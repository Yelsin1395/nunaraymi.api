import { Router } from 'express';

export default function ({ homeController }: any) {
  const router = Router();

  router.get('/welcome', homeController.welcome.bind(homeController));

  return router;
}
