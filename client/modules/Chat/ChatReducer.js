import { Map } from 'immutable';
import {
  ADD_MESSAGES,
} from './constants';

const initialState = Map({
  username: '',
  messages: [],
});

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGES: {
      return state.set('messages', action.messages);
      break;
    }
    default:
      return state;
  }
};

export default ChatReducer;
