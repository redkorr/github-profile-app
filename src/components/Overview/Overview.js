import React from 'react';

const Overview = ({ userData }) => {
  return (
    <div>
      <p>{userData.login}</p>
    </div>
  );
};

export default Overview;
