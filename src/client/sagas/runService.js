import { takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import types, { APP_SERVICE_DONE } from 'actions/app';

const delayValue = 300;

function* runService() {
  yield takeEvery(types.APP_SERVICE_START, function* runServiceSage({ type, payload }) {
    yield call(delay, delayValue);
    yield put(APP_SERVICE_DONE({ result: type, payload }));
  });
}

export default runService;
