const path = require('path');
const serve = require('koa-static');

exports.init = (app) => {
  app.use(serve(path.resolve(__dirname, '.././../../dist')));
};
