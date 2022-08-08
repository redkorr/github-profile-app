import React from 'react';

const LastUpdate = ({ pushed_at }) => {
  const dateCutter = () => {
    const createDate = new Date(pushed_at);
    return <p>Updated on {createDate.toISOString().slice(0, 10)}</p>;
  };
  return <div>{dateCutter(pushed_at)}</div>;
};

export default LastUpdate;
