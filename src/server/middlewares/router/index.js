const Router = require('koa-router');
const api = require('./api');
const home = require('./home');

exports.init = (app) => {
  const router = new Router();
  app.router = router; // eslint-disable-line
  api(app);
  home(app);
  app.use(router.routes()).use(router.allowedMethods());
};
