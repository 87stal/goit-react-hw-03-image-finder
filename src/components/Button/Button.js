import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ fetchImages }) {
  return (
    <button type="articles" className={styles.Button} onClick={fetchImages}>
      Load more
    </button>
  );
}
Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};
export default Button;
