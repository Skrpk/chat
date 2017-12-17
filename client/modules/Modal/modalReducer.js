import { Map } from 'immutable';

import {
  SET_USERNAME,
} from './constants';

const initialState = Map({
  username: '',
});

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return state.set('username', action.username);
    }
    default:
      return state;
  }
};

export default ChatReducer;
