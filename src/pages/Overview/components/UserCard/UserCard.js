import React, { useState } from 'react';

import { Avatar, BurgerMenuButton, ProfileAge } from './components';
import styles from './UserCard.module.css';

const UserCard = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.userCardUpperSection}>
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
        <Avatar src={user.avatar_url} />
      </div>
      <BurgerMenuButton isActive={isActive} setIsActive={setIsActive} />

      {isActive && (
        <div className={styles.userCardBottomSection}>
          <div className={styles.text}>
            <p>Bio: {user.bio}</p>
            <p>Country: {user.location}</p>
            <div>
              <p>
                Followers: {user.followers} Following: {user.following}
              </p>
            </div>
            <p>Company: {user.company}</p>
            <ProfileAge user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
