import { Map } from 'immutable';
import {
  ADD_MESSAGES,
  ADD_MESSAGE,
} from './constants';

const initialState = Map({
  username: '',
  messages: [],
});

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGES: {
      return state.set('messages', action.messages);
    }
    case 'SET_USERNAME': {
      return state.set('username', action.username);
    }
    case ADD_MESSAGE: {
      return state.updateIn(['messages'], array => {
        array.push(action.message);
        const a = [...array];
        a.push(action.message);
        return a;
      });
    }
    default:
      return state;
  }
};

export default ChatReducer;
