import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export class Modal extends React.Component {
  overlayRef = React.createRef(null);

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleCLose = e => {
    if (e.target === this.overlayRef.current) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div
        ref={this.overlayRef}
        className={styles.overlay}
        onClick={this.handleCLose}
      >
        <div className={styles.modal}>
          <img
            src={this.props.largeImage.url}
            alt={this.props.largeImage.alt}
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
