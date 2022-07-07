import React from 'react';

const UserCard = ({ user }) => {
  const createDate = new Date(user.created_at);
  const today = new Date();
  const difference = (
    (today - createDate) /
    (1000 * 60 * 60 * 24) /
    365
  ).toFixed(1);
  return (
    <div>
      <h1>{user.login}</h1>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} />
      <p>{user.bio}</p>
      <div>
        {user.followers} {user.following}
      </div>
      <p>{user.location}</p>
      <p>{user.company}</p>

      {user.created_at && <p>{createDate.toISOString().slice(0, 10)} </p>}
      <p>{difference}</p>
    </div>
  );
};

export default UserCard;
