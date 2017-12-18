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
        onChange={props.onChangeInput}
        value={props.value}
      ></textarea>
      <span
        className={styles.submit}
        onClick={() => props.send(props.value)}
      >SEND</span>
    </div>
  );
};

MessageInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};

export default MessageInput;
