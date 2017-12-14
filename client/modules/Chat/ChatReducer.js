import { Map } from 'immutable';
import {
  ADD_MESSAGES,
} from './constants';

const initialState = Map({
  username: '',
  messages: [],
});
debugger
const ChatReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_MESSAGES: {
      debugger
      state.set('messages', action.messages);
      break;
    }
    default:
      return state;
  }
};

export default ChatReducer;
