import { Map } from 'immutable';

import {
  SET_USERNAME,
} from './constants';

const initialState = Map({
  username: '',
});

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return state.set('username', action.username);
    }

    default:
      return state;
  }
};

// Export Reducer
export default AppReducer;
