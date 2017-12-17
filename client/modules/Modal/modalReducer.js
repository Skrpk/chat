import { Map } from 'immutable';

const initialState = Map({
  username: '',
});

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ChatReducer;
