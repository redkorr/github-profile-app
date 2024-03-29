import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../context/DataContext';
import { Repository } from './components';

const Repositories = () => {
  const { name } = useParams();
  const { useRepositories } = useContext(DataContext);
  const repos = useRepositories(name);
  return (
    <div>
      {repos.map((repo) => (
        <Repository key={repo.node.id} repo={repo.node} />
      ))}
    </div>
  );
};

export default Repositories;
