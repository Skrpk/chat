import { takeEvery, call, put, all, fork } from 'redux-saga/effects';

import callApi from '../../util/apiCaller';
import {
  addMessages,
} from './ChatActions';

function* getMessagesRequest() {
  try {
    const messages = yield call(callApi, 'messages');

    yield put(addMessages(messages));
  } catch ({ message }) {
    console.error(message);
  }
}
