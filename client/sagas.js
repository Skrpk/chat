import 'regenerator-runtime/runtime';
import { fork } from 'redux-saga/effects';

import rootPostSaga from './modules/Post/postSagas';
import rootChatSaga from './modules/Chat/ChatSagas';
import rootModalSaga from './modules/Modal/ModalSagas';

export default function* rootSaga() {
  yield [
    fork(rootChatSaga),
    fork(rootModalSaga),
  ];
}
