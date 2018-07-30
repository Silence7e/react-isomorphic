
const router = require('./router');
const server = require('./static');
const logger = require('./logger');

exports.useMiddlewares = (app) => {
  logger.init(app);
  server.init(app);
  router.init(app);
};
