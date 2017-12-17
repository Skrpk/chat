import { takeEvery, call, put, all, fork } from 'redux-saga/effects';

import callApi from '../../util/apiCaller';
import {
  addMessages,
} from './ChatActions';
import {
  FETCH_MESSAGES_REQUEST,
} from './constants';

function* getMessagesRequest() {
  try {
    const messages = yield call(callApi, 'messages');
    yield put(addMessages(messages));
  } catch ({ message }) {
    console.error(message);
  }
}


function* getMessageSaga() {
  yield takeEvery(FETCH_MESSAGES_REQUEST, getMessagesRequest);
}

export default function* rootChatSaga() {
  yield all([
    fork(getMessageSaga),
  ]);
}
