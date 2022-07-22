import React from 'react';

import styles from './DisplayBlockHeader.module.css';

const DisplayBlockHeader = () => {
  return (
    <header className={styles.header}>
      <button className={styles.button}>Overview</button>
      <button className={styles.button}>Repositories</button>
      <button className={styles.button}>Stars</button>
    </header>
  );
};

export default DisplayBlockHeader;
