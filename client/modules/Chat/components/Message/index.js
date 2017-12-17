import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Message = (props) => {
  return (<div className={styles.message}>
    <span>{props.name}</span>:
    <span>{props.message}</span>
  </div>);
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
