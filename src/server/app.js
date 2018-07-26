
const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const serverEntry = require('../../dist/serverEntry');
const serverRender = require('./serverRender');

const template = fs.readFileSync(path.resolve(__dirname, '../../dist/server.ejs'), 'utf8');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  serverRender(serverEntry, template, ctx);
  next();
});

app.use(serve(path.resolve(__dirname, '../../dist')));

app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});


module.exports = app;
