import React, { useContext } from 'react';

import DataContext, { useData } from '../Context/DataContext';

const Overview = ({ useData }) => {
  const userData = useContext(DataContext);
  return (
    <div>
      <p>{userData.login}</p>
    </div>
  );
};

export default Overview;
