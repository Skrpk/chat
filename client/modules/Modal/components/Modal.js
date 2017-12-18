import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './style.css';

import {
  setUsername,
} from '../modalActions';
import {
  fetchMessages,
} from '../../Chat/ChatActions';

const modalRoot = global.document ? document.getElementById('modal-root') : null;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = global.document ? document.createElement('div') : null;
  }

  state = {
    username: '',
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    this.props.fetchMessages();
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const modalMarkup = (
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <label className={styles.imroveHeight} htmlFor="name">Enter your name</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <button
            className={styles.button}
            disabled={!this.state.username}
            onClick={() => this.props.setUsername(this.state.username)}
          >Go!</button>
        </div>
      </div>
    );
    if (typeof window !== 'undefined') {
      return ReactDOM.createPortal(
        modalMarkup,
        this.el,
      );
    } else {
      return null;
    }
  }
}

Modal.propTypes = {
  setUsername: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setUsername: (username) => dispatch(setUsername(username)),
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
