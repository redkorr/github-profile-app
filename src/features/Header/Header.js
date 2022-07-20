import React from 'react';

import styles from './Header.module.css';
import { Searchbar } from './components';

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>Github Profile App</h1>
      <Searchbar></Searchbar>
    </header>
  );
};

export default Header;
