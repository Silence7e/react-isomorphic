import { take, cancel, fork } from 'redux-saga/effects';
import types from 'actions/app';
import runService from './runService';

function genRootSage(sagas) {
  return function* rootSage() {
    const task = yield fork(function* forkSagas() {
      yield sagas.map(s => fork(s));
    });
    yield take(types.APP_EXIT);
    cancel(task);
  };
}

export default genRootSage([runService]);
