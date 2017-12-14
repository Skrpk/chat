import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import styles from './style.css';

import {
  fetchMessages,
} from '../../ChatActions';

class ChatPage extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

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

const mapStateToProps = store => ({

}); 

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
