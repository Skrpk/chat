import {
  SET_USERNAME,
} from './constants';

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username,
});
