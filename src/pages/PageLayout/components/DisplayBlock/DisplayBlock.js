import React from 'react';

import Repositories from '../../../../components/Repositories/Repositories';
import DisplayBlockHeader from './components/DisplayBlockHeader/DisplayBlockHeader';
import styles from './DisplayBlock.module.css';

const DisplayBlock = () => {
  return (
    <div className={styles.wrapper}>
      <DisplayBlockHeader />
      <Repositories />
    </div>
  );
};

export default DisplayBlock;
