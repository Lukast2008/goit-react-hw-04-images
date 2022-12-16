import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export class Modal extends Component {
  closeOnPushEsc = ev => {
    if (ev.code === 'Escape') {  
      this.props.closeModal()
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnPushEsc);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.closeOnPushEsc);
  }

  render() {
    const {
      closeModal,
      largeImage: { src, alt },
    } = this.props;
    return (
      <div onClick={closeModal} className={styles.overlay}>
        <img  className={styles.modal} src={src} alt={alt}  />
    
      </div>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.shape().isRequired,
  closeModal: PropTypes.func.isRequired
}