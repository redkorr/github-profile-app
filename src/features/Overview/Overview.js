import React from 'react';

import { Contributions } from './components';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.wrapper}>
      <Contributions />
    </div>
  );
};

export default Overview;
