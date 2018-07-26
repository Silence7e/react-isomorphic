/* eslint-disable */
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');

const defaults = {
  view: path.resolve(process.cwd(), 'view'),
  extname: 'js'
};

module.exports = (options, app) => {
  options = options || {};
  options = Object.assign({}, defaults, options);
  assert(typeof options.view === 'string', 'options.view required, and must be a string');
  assert(fs.existsSync(options.view), `Directory ${options.view} not exists`);
  options.extname = options.extname.trim().replace(/^\.?/, '.');
  app.context.render = function (filename, _context) {
    if (!path.extname(filename)) {
      filename += options.extname;
    }
    let filepath = path.isAbsolute(filename) ? filename : path.resolve(options.view, filename);
    const context = Object.assign({}, this.state, _context);

    try {
      // 获取server/admin.js编译后的文件
      let view = require(filepath);
      view = view.default || view;
      // view是一个函数，调用后返回一个react组件，然后把react组件渲染成html字符串
      this.body = ReactDOMServer.renderToNodeStream(view(context));
      this.type = 'html';
    } catch (err) {
      err.code = 'REACT';
      throw err;
    }
  }
};