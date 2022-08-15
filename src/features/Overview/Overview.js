import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../context/DataContext';
import { Contributions } from './components';

const Overview = () => {
  const { name } = useParams();
  const { useContributions } = useContext(DataContext);
  const contributions = useContributions(name);

  return (
    <div>
      <Contributions contributions={contributions}/>
    </div>
  );
};

export default Overview;
