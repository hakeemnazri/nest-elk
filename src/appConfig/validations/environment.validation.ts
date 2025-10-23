import * as joi from 'joi';

export default joi.object({
  NODE_ENV: joi.string().valid('development').default('development'),
  APP_PORT: joi.number().required().default(3000),
  ELASTICSEARCH_NODE: joi.string().required(),
  ELASTICSEARCH_PORT: joi.number().required(),
  LOG_LEVEL: joi.string().required(),
  ES_INDEX_PREFIX: joi.string().required(),
  LOG_FILE_PATH: joi.string().required(),
  LOG_DATE_PATTERN: joi.string().required(),
  LOG_ZIPPED: joi.boolean().required(),
  LOG_MAX_SIZE: joi.string().required(),
  LOG_MAX_FILES: joi.string().required(),
  LOGSTASH_HOST: joi.string().required(),
  LOGSTASH_PORT: joi.number().required(),
  KIBANA_PORT: joi.number().required(),
});
