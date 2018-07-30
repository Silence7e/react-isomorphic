const chalk = require('chalk');
const Koa = require('koa');
const { connect, initSchema } = require('./database/init');
const { useMiddlewares } = require('./middlewares');

const port = process.env.PORT || 3000;


exports.start = async () => {
  await connect();
  initSchema();
  const app = new Koa();
  await useMiddlewares(app);
  console.log(app.logger);
  app.on('error', (err, ctx) => {
    app.logger.error('server error', err, ctx);
  });

  app.listen(port, () => {
    app.logger.info(`Server is running on ${chalk.green(port)}`);
  });
  app.listen(4455);
};
