import React from 'react';
import ImageItem from '../ImageItem/ImageItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ images, onSetImageLarge }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ largeImageURL, webformatURL }) => (
        <li className={styles.ImageGalleryItem} key={largeImageURL}>
          <ImageItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onSetImageLarge={onSetImageLarge}
          />
        </li>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ largeImageURL: PropTypes.string.isRequired }),
  ).isRequired,
  onSetImageLarge: PropTypes.func.isRequired,
};
export default ImageGallery;
