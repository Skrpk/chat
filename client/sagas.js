import 'regenerator-runtime/runtime';

import rootPostSaga from './modules/Post/postSagas';
import rootChatSaga from './modules/Chat/ChatSagas';

export default function* rootSaga() {
  yield rootChatSaga();
}
