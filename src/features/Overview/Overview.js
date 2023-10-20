import React from 'react';

import { Contributions, ContributionsChart } from './components';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.wrapper}>
      <Contributions />
      <ContributionsChart />
    </div>
  );
};

export default Overview;
