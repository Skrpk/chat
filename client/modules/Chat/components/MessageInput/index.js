import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const MessageInput = (props) => {
  return (
    <div className={styles.wrapper}>
      <span>{props.name}</span>
      <textarea
        className={styles.textarea}
        rows="3"
      ></textarea>
      <span className={styles.submit}>SEND</span>
    </div>
  );
};

MessageInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MessageInput;
