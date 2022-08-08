import React from 'react';

const ProfileAge = ({ user }) => {
  const createDate = new Date(user.createdAt);
  const today = new Date();
  const difference = (
    (today - createDate) /
    (1000 * 60 * 60 * 24) /
    365
  ).toFixed(1);
  return (
    <>
      {user.createdAt && (
        <p>Created: {createDate.toISOString().slice(0, 10)} </p>
      )}
      <p>Profile age: {difference}</p>
    </>
  );
};

export default ProfileAge;
