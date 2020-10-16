import React from 'react';
import PropTypes from 'prop-types';

const ImageModal = ({largeImage}) => (
    <img src={largeImage} alt="" />
)
ImageModal.defaultProps = {
    largeImage:
      'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  };
  
ImageModal.propTypes = {
    largeImage: PropTypes.string.isRequired,
  };
export default ImageModal;

