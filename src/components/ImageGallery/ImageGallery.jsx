import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles.module.css';
export const ImageGallery = ({ gallery, openModal }) => {

  return (
    <ul  className={styles.imageGallery}>
      <ImageGalleryItem  gallerylistItem={gallery}  openModal={openModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape()).isRequired,

  openModal: PropTypes.func.isRequired
}.isRequired