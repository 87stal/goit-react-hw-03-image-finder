import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Modal;
