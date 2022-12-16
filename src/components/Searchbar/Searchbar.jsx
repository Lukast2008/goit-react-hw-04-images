import React, { Component } from 'react';
import styles from '../styles.module.css';

import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    val: '',
  };

  handleOnChange = ev => {
    this.setState({ val: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { onsubmit } = this.props;
    onsubmit(this.state);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ val: '' });
  };

  render() {
    return (
      <header className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            placeholder="Search images and photos"
            name="search"
            value={this.state.val}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onsubmit: PropTypes.func.isRequired,
};
