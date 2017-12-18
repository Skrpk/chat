import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import styles from './style.css';

import {
  sendMessage,
  createConnection,
} from '../../ChatActions';

class ChatPage extends React.Component {
  state = {
    messageText: '',
  }

  componentDidMount() {
    this.props.createConnection();
  }

  renderMessages = () =>
    this.props.messages.map((message, index) =>(
      <Message
        name={message.author.name}
        message={message.text}
        key={Math.random(index)}
      />
    ))

  onChangeInput = (e) => this.setState({ messageText: e.target.value })

  sendMessage = () => {
    this.props.sendMessage({
      message: this.state.messageText,
      name: this.props.name,
    });
    this.setState({ messageText: '' });
  }
  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.messages}>
          {this.renderMessages()}
        </div>
        <MessageInput
          name={this.props.name}
          onChangeInput={this.onChangeInput}
          value={this.state.messageText}
          send={this.sendMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  messages: store.chat.get('messages'),
  name: store.chat.get('username'),
}); 

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
  createConnection: () => dispatch(createConnection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
