import winston, { format } from 'winston';

const { timestamp, combine, prettyPrint } = format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: 'Logging' },
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/info.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: './logs/warn.log',
      level: 'warn',
    }),
  ],
});

if (process.env.NODE_ENV === 'development')
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );

export const logError = (msg: string, ...args: any) =>
  logger.error(msg, ...args);

export const logInfo = (msg: string, ...args: any) => logger.info(msg, ...args);

export const logWarn = (msg: string, ...args: any) => logger.warn(msg, ...args);

export default {
  info: logInfo,
  warn: logWarn,
  error: logError,
};
