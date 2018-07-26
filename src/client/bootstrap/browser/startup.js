import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import sagas from 'sagas';

import createStore from './createStore';
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
const history = createHistory();
const store = createStore(history, sagas);
const root = document.getElementById('root');
function render(Component) {
  ReactDOM.render((
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {Component}
        </ConnectedRouter>
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
