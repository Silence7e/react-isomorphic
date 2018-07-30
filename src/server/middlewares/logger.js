/* eslint-disable no-param-reassign */
const log4js = require('log4js');

const logger = log4js.getLogger();

exports.init = (app, level = 'debug') => {
  logger.level = level;
  app.logger = logger;
  return app;
};
