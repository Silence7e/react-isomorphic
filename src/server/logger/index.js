const log4js = require('log4js');

const logger = log4js.getLogger();

module.exports = (level = 'debug') => {
  logger.level = level;
  return logger;
};
