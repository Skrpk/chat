import {
  FETCH_MESSAGES_REQUEST,
  ADD_MESSAGES,
} from './constants';

export const fetchMessages = () => ({
  type: FETCH_MESSAGES_REQUEST,
});

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  messages,
});
