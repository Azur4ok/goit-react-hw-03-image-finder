import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image, alt, largeImageUrl, onOpenModal}) => {
    return (
        <li className={styles.imageGalleryItem} onClick={onOpenModal}>
            <img className={styles.imageGalleryItem_image} src={image} alt={alt} data-modal_version={largeImageUrl} />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    alt: PropTypes.string,
    image: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,

};