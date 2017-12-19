import { takeEvery, call, put, all, fork } from 'redux-saga/effects';

import callApi from '../../util/apiCaller';
import {
  SET_USERNAME,
  SET_USERNAME_REQUEST,
} from './constants';

function* getMessagesRequest({ username }) {
  try {
    yield call(callApi, 'user', 'post', { name: username });
    yield put({
      type: SET_USERNAME,
      username,
    });
  } catch ({ message }) {
    console.error(message);
  }
}

function* getMessageSaga() {
  yield takeEvery(SET_USERNAME_REQUEST, getMessagesRequest);
}

export default function* rootAppSaga() {
  yield all([
    fork(getMessageSaga),
  ]);
}
