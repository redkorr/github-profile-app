import React from 'react';

import styles from './DisplayBlockHeader.module.css';

const DisplayBlockHeader = ({ setIndex }) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.button}
        onClick={() => {
          setIndex(0);
        }}
      >
        Overview
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setIndex(1);
        }}
      >
        Repositories
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setIndex(2);
        }}
      >
        Stars
      </button>
    </header>
  );
};

export default DisplayBlockHeader;
