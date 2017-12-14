import React from 'react';
import PropTypes from 'prop-types';

import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import styles from './style.css';

class ChatPage extends React.Component {
  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.messages}>
          <Message />
        </div>
        <MessageInput />
      </div>
    );
  }
}

export default ChatPage;
