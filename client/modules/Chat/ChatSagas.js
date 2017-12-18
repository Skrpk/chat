import { takeEvery, take, call, put, all, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import openSocket from 'socket.io-client';

import callApi from '../../util/apiCaller';
import {
  addMessages,
} from './ChatActions';
import {
  FETCH_MESSAGES_REQUEST,
  SEND_MESSAGE,
  CREATE_CONNECTION,
  ADD_MESSAGE,
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

function websocketInitChannel(ws) {
  return eventChannel(emitter => {
    // init the connection here

    ws.on('message', (data) => {
      return emitter({
        type: ADD_MESSAGE,
        message: data,
      });
    });
    // unsubscribe function
    return () => {
      // do whatever to interrupt the socket communication here
    };
  });
}

function* sendMessage(ws, data) {
  ws.emit('message', data.message);
}

function* websocketSagas() {
  while (true) {
    yield take(CREATE_CONNECTION);
    const ws = yield call(openSocket, 'http://localhost:8888');
    const channel = yield call(websocketInitChannel, ws);

    yield takeEvery(SEND_MESSAGE, sendMessage, ws);

    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  }
}

export default function* rootChatSaga() {
  yield all([
    fork(getMessageSaga),
    fork(websocketSagas),
  ]);
}
