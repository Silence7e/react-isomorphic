import { takeEvery, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import types, { APP_SERVICE_DONE } from 'actions/app';

const delayValue = 300;

const services = {
};

function* runService(name, options, func, ...args) {
  const result = yield call(func, ...args);
  const success = { name, result };
  yield put(APP_SERVICE_DONE(success));
}

export default function* () {
  yield takeEvery(types.APP_SERVICE_START, function* runServiceSage({ type, payload }) {
    yield call(delay, delayValue);
    const { name } = payload;
    const options = {};
    const task = yield fork(runService, name, options, payload.func, ...(payload.args || []));
    services[name] = {
      task,
    };
    yield put(APP_SERVICE_DONE({ result: type, payload }));
  });
}
