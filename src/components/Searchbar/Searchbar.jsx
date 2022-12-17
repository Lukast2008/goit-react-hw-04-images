import { useState } from 'react';
import styles from '../styles.module.css';

import PropTypes from 'prop-types';

export const SearchBar = ({ onsubmit }) => {
  const [val, setVal] = useState('');

  const handleOnChange = ev => {
    setVal(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    onsubmit(val);
    clearInput();
  };

  const clearInput = () => {
    setVal('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          name="search"
          value={val}
          onChange={handleOnChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onsubmit: PropTypes.func.isRequired,
};
