import { registerAs } from '@nestjs/config';

export default registerAs('logger', () => ({
  level: process.env.LOG_LEVEL || 'info',
  elasticsearchNode: process.env.ELASTICSEARCH_NODE || 'localhost',
  elasticsearchPort: parseInt(process.env.ELASTICSEARCH_PORT || '9200'),
  elasticsearchIndexPrefix: process.env.ES_INDEX_PREFIX || 'app',
  filePath: process.env.LOG_FILE_PATH || 'logs/application-%DATE%.log',
  datePattern: process.env.LOG_DATE_PATTERN || 'YYYY-MM-DD',
  zippedArchive: process.env.LOG_ZIPPED === 'true' ? true : true,
  maxSize: process.env.LOG_MAX_SIZE || '20m',
  maxFiles: process.env.LOG_MAX_FILES || '14d',
  logstashHost: process.env.LOGSTASH_HOST || 'logstash',
  logstashPort: parseInt(process.env.LOGSTASH_PORT || '5001'),
}));
