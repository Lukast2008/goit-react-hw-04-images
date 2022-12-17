import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export const Modal = ({ largeImage, closeModal }) => {
  const closeOnPushEsc = ev => {
    if (ev.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnPushEsc);
  });

  useEffect(() => {
    const closeOnPushEsc = () =>
      document.addEventListener('keydown', closeOnPushEsc);
    return () => {
      document.removeEventListener('keydown', closeOnPushEsc);
    };
  }, []);

  const { src, alt } = largeImage;

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <img className={styles.modal} src={src} alt={alt} />
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.shape().isRequired,
  closeModal: PropTypes.func.isRequired,
};
