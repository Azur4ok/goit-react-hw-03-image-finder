import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem/index';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {images &&
        images.map(({ id, alt, image, largeImageUrl }) => (
          <ImageGalleryItem
            key={id}
            alt={alt}
            image={image}
            largeImageUrl={largeImageUrl}
            onOpenModal={onOpenModal}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      alt: PropTypes.string,
      image: PropTypes.string.isRequired,
      largeImageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
