// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

import {
  SET_USERNAME_REQUEST,
} from './constants';

export const setUsername = (username) => ({
  type: SET_USERNAME_REQUEST,
  username,
});

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}
