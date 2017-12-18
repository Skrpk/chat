import {
  SET_USERNAME_REQUEST,
} from './constants';

export const setUsername = (username) => ({
  type: SET_USERNAME_REQUEST,
  username,
});
