import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import reducers from '../../reducers';

export default (history, sagas) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
    window.__INITIAL__STATE__ || {},  // eslint-disable-line
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(sagas);

  return store;
};
