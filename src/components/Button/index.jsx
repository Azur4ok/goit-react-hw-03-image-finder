import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onLoad }) => {
  return (
    <button className={styles.button} onClick={onLoad}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
