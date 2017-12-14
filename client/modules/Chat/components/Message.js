import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  return (<div>
    <span>{props.name}</span>:
    <span>{props.message}</span>
  </div>);
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
