import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from './style.css';

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
          <button className={styles.button}>Go!</button>
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
