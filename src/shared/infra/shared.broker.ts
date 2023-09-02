import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import 'express-async-error';
import errorMiddleware from '@shared/middleware/error.middleware';
import notFoundMiddleware from '@shared/middleware/notFound.middleware';

export default function ({ homeRouterPublic }: any) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // middleware default
  apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan('dev'));

  // prefix route
  router.use('', apiRoutes);

  // middleware setting
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  // endpoints
  apiRoutes.use('/public/home', homeRouterPublic);

  return router;
}
