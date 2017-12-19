import 'regenerator-runtime/runtime';
import { fork } from 'redux-saga/effects';

import rootPostSaga from './modules/Post/postSagas';
import rootChatSaga from './modules/Chat/ChatSagas';
import rootAppSaga from './modules/App/AppSagas';

export default function* rootSaga() {
  yield [
    fork(rootChatSaga),
    fork(rootAppSaga),
  ];
}
