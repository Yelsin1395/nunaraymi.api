import { NextFunction, Request, Response } from 'express';
import { HEADERS } from '../common/constants';
import { auditSite$ } from '../common/audit';
import { logger } from '@shared/infra/logger';

export default function (req: Request, res: Response, next: NextFunction): void {
  const inSite = req.headers[HEADERS['X-KAPUC-SITE']] || '';
  auditSite$.next(String(inSite));
  logger.info(`This site: ${auditSite$.getValue()}`);
  logger.info(`Input: ${JSON.stringify(req['body'])}`);
  next();
}
