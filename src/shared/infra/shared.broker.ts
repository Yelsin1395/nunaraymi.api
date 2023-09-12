import express from 'express';
import 'express-async-errors';
import expressWinston from 'express-winston';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import errorMiddleware from '@shared/middleware/error.middleware';
import notFoundMiddleware from '@shared/middleware/notFound.middleware';
import auditSiteMiddleware from '@shared/middleware/auditSite.middleware';
import { logger } from './logger';

export default function ({
  homeRouterPublic,
  kapucRouterPublic,
  kapucRouterPrivate,
  kamachiqPublic,
  kamachiqPrivate,
  usuarioPublic,
  usuarioPrivate,
}: any) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // middleware default
  apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan('dev'))
    .use(auditSiteMiddleware)
    .use(
      expressWinston.logger({
        winstonInstance: logger,
      })
    )
    .use(
      expressWinston.errorLogger({
        winstonInstance: logger,
      })
    );

  // prefix route
  router.use('', apiRoutes);

  // middleware setting
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  // endpoints
  apiRoutes.use('/public/home', homeRouterPublic);

  // kapuc
  apiRoutes.use('/public/kapuc', kapucRouterPublic);
  apiRoutes.use('/private/kapuc', kapucRouterPrivate);

  // kamachiq
  apiRoutes.use('/public/kamachiq', kamachiqPublic);
  apiRoutes.use('/private/kamachiq', kamachiqPrivate);

  // usuario
  apiRoutes.use('/public/usuario', usuarioPublic);
  apiRoutes.use('/private/usuario', usuarioPrivate);

  return router;
}
