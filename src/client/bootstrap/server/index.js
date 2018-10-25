import React from 'react';
import { createStore, combineReducers } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../component/App';
import reducers from '../../reducers';

const createStoreMap = init => createStore(
  combineReducers({
    ...reducers,
  }),
  init,
);

const server = (store, routerContext, url) => (
  <Provider store={store}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
);
export { createStoreMap };
export default server;
