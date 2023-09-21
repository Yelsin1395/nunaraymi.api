import { Request, NextFunction } from 'express';
import mcache from 'memory-cache';
import config from '@shared/infra/config';

export default function (duration: number) {
  return (req: Request, res: any, next: NextFunction) => {
    const key = config.MEMORY_CACHE_KEY + req.originalUrl || req.url;
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      return res.send(JSON.parse(cachedBody));
    } else {
      res.sendResponse = res.send;
      res.send = (body: any) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
}
