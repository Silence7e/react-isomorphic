const fs = require('fs');
const path = require('path');
const serverRender = require('./serverRender');

const serverEntry = require('../../../../dist/serverEntry');

const template = fs.readFileSync(path.resolve(__dirname, '../../../../dist/server.ejs'), 'utf8');

module.exports = (app) => {
  app.router.get('*', async (ctx) => {
    await serverRender(serverEntry, template, ctx);
  });
};
