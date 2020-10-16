import React from 'react';
import styles from "./ImageItem.module.css";
import PropTypes from 'prop-types';

export default function ImageItem({ webformatURL, onSetImageLarge, largeImageURL}) {
  return <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} onClick={() => onSetImageLarge(largeImageURL)}/>;
}

ImageItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSetImageLarge: PropTypes.func.isRequired,
};
