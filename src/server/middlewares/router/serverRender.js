const ReactDomServer = require('react-dom/server');
const { matchRoutes } = require('react-router-config');
const serialize = require('serialize-javascript');
const ejs = require('ejs');
const Helmat = require('react-helmet').default;
const router = require('../../../client/component/ssr/routes').default;


module.exports = async (bundle, template, ctx) => {
  const { url } = ctx;
  const branch = matchRoutes(router, url);
  const store = bundle.createStoreMap({ msg: 'todo' });
  const promises = branch.map(({ route }) => {
    const { fetch } = route.component;
    return fetch instanceof Function ? fetch(store) : Promise.resolve(null);
  });
  await Promise.all(promises).catch((err) => {
    console.log(err);
  });
  const createApp = bundle.default;


  const routeContext = {};
  const app = createApp(store, routeContext, ctx.url);
  const helmet = Helmat.rewind();
  helmet.title = '<title>todo list</title>';
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
  ctx.body = html;
};
