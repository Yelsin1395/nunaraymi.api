import { NextFunction, Request, Response } from 'express';
import { logger } from '@shared/infra/logger';
import { jwtVerify } from '@shared/common/jwtHelpers';
import { HEADERS } from '../common/constants';
import { auditSite$, auditUsuario$ } from '../common/audit';

export default function (req: Request, res: Response, next: NextFunction): void {
  const inSite = req.headers[HEADERS['X-KAPUC-SITE']] || '';
  const token = req.headers?.authorization?.replace('Bearer ', '');

  auditSite$.next(String(inSite));
  logger.info(`This site: ${auditSite$.getValue()}`);

  if (token) {
    const usuario: any | null = jwtVerify(token);
    auditUsuario$.next(usuario);
    logger.info(`This user: ${usuario?._id}`);
  }

  next();
}
