import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';

const Overview = () => {
  const { name } = useParams();
  const { useData } = useContext(DataContext);
  const user = useData(name);
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} />
    </div>
  );
};

export default Overview;
