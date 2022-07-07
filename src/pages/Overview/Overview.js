import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { UserCard } from './components';

const Overview = () => {
  const { name } = useParams();
  const { useData } = useContext(DataContext);
  const user = useData(name);

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default Overview;
