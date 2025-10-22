import * as winston from 'winston';

export type LogstashTransportInstance = winston.transport & {
  host: string;
  port: number;
  logstash: boolean;
};
