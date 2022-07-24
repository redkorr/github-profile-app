import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../context/DataContext';
import { DisplayBlock, UserCard } from './components';
import styles from './PageLayout.module.css';

const Overview = () => {
  const { name } = useParams();
  const { useData } = useContext(DataContext);
  const user = useData(name);

  return (
    <div className={styles.div}>
      <UserCard user={user} />
      <DisplayBlock />
    </div>
  );
};

export default Overview;
