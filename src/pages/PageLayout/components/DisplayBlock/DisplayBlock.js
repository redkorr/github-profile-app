import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../../../context/DataContext';
import Repositories from '../../../../components/Repositories/Repositories';
import DisplayBlockHeader from './components/DisplayBlockHeader/DisplayBlockHeader';
import styles from './DisplayBlock.module.css';

const DisplayBlock = () => {
  const { name } = useParams();
  const { useData } = useContext(DataContext);
  const user = useData(name);
  return (
    <div className={styles.wrapper}>
      <DisplayBlockHeader />
      <Repositories user={user} />
    </div>
  );
};

export default DisplayBlock;
