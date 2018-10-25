import { delay } from 'redux-saga';
import { call, put, fork, takeEvery } from 'redux-saga/effects';
import types, { APP_SERVICE_DONE } from 'actions/app';

const delayValue = 300;

const services = {
};

function* runService(name, options, func, ...args) {
  try {
    const result = yield call(func, ...args);
    const success = { name, result };
    yield put(APP_SERVICE_DONE(success));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeEvery(types.APP_SERVICE_START, function* runServiceSage({ payload }) {
    yield call(delay, delayValue);
    const { name } = payload;
    const options = {};
    const task = yield fork(runService, name, options, payload.func, ...(payload.args || []));
    services[name] = {
      task,
    };
  });
}
