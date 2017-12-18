import {
  FETCH_MESSAGES_REQUEST,
  ADD_MESSAGES,
  SEND_MESSAGE,
  CREATE_CONNECTION,
} from './constants';

export const fetchMessages = () => ({
  type: FETCH_MESSAGES_REQUEST,
  a: 1
});

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  messages,
});

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  message,
});

export const createConnection = () => ({
  type: CREATE_CONNECTION,
});
