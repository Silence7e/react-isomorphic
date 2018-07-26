const ReactDomServer = require('react-dom/server');
const serialize = require('serialize-javascript');
const ejs = require('ejs');
const Helmat = require('react-helmet').default;


module.exports = (bundle, template, ctx) => {
  const store = bundle.createStoreMap({ msg: 'hehe' });
  const createApp = bundle.default;
  const app = createApp(store);
  const helmet = Helmat.rewind();
  const state = store.getState();
  const content = ReactDomServer.renderToString(app);
  const html = ejs.render(template, {
    appString: content,
    initialState: serialize(state),
    meta: helmet.meta.toString(),
    title: helmet.title.toString(),
    style: helmet.style.toString(),
    link: helmet.link.toString(),
  });
  ctx.response.body = html;
};
