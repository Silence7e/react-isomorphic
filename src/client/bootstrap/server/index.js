import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../component/App';
import reducers from '../../reducers';

const createStoreMap = init => createStore(
  reducers,
  init,
);

const server = store => (
  <Provider store={store}>
    <App />
  </Provider>
);
export { createStoreMap };
export default server;
