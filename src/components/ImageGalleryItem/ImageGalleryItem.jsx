import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export const ImageGalleryItem = ({ gallerylistItem, openModal }) => {
  return gallerylistItem.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} id={id} className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={() => openModal({ src: largeImageURL, alt: tags })}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  gallerylistItem: PropTypes.arrayOf(
    PropTypes.shape.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
}.isRequired;
