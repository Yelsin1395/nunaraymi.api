import winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';
import config from './config';

const logtail = new Logtail(String(config.LOGTAIL_SOUCE_TOKEN));

export const logger = winston.createLogger({
  level: config.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports:
    config.LOG_LEVEL === 'debug'
      ? [new winston.transports.Console()]
      : [new LogtailTransport(logtail)],
});
