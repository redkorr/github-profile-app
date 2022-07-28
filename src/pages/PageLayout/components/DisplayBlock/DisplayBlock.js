import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Overview, Repositories, Stars } from '../../../../components';
import DataContext from '../../../../context/DataContext';
import DisplayBlockHeader from './components/DisplayBlockHeader/DisplayBlockHeader';
import styles from './DisplayBlock.module.css';

const DisplayBlock = () => {
  const [index, setIndex] = useState(1);
  const display = () => {
    const elements = [<Overview />, <Repositories user={user} />, <Stars />];
    return elements[index];
  };
  const { name } = useParams();
  const { useData } = useContext(DataContext);
  const user = useData(name);
  return (
    <div className={styles.wrapper}>
      <DisplayBlockHeader setIndex={setIndex} />
      {display()}
    </div>
  );
};

export default DisplayBlock;
