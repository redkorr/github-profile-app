import React, { useContext } from 'react';

import { useData } from '../../context/DataContext';

const Overview = () => {
  const userData = useData();
  return (
    <div>
      <p>{userData.login}</p>
    </div>
  );
};

export default Overview;
