import React from 'react';

import styles from './UserCard.module.css';

const Avatar = ({ user }) => {
  return (
    <img alt='user avatar' className={styles.avatar} src={user.avatar_url} />
  );
};

export default Avatar;
