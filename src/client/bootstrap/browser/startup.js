import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from '../../reducers';


import App from '../../component/App';

const createApp = (TheApp) => {
  class Main extends React.Component {
    componentDidMount() {
      // do something
    }

    render() {
      return <TheApp />;
    }
  }
  return <Main />;
};


const store = createStore(
  reducers,
  window.__INITIAL__STATE__ || {},  // eslint-disable-line
  applyMiddleware(logger),
);
const root = document.getElementById('root');
function render(Component) {
  ReactDOM.render((
    <div>
      <Provider store={store}>
        {Component}
      </Provider>
    </div>), root);
}
render(createApp(App));

if (module.hot) {
  module.hot.accept('../../component/App', () => {
    const NextApp = require('../../component/App').default; // eslint-disable-line
    render(createApp(NextApp));
  });
}
