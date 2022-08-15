import React from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    imageName: '',
  };

  handleChange = event => this.setState({ imageName: event.target.value });

  handelSubmit = event => {
    event.preventDefault();
    if(!this.state.imageName) {
      return alert('Type a word')
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handelSubmit} className={styles.searchForm}>
          <button className={styles.searchForm_button} type="submit">
            <span className={styles.searchForm_button_label}>search</span>
          </button>
          <input
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
