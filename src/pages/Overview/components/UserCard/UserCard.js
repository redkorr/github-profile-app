import React, { useState } from 'react';
import BurgerIcon from '../../../../assets/burger-menu.svg';

import styles from './UserCard.module.css';

const UserCard = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  const createDate = new Date(user.created_at);
  const today = new Date();
  const difference = (
    (today - createDate) /
    (1000 * 60 * 60 * 24) /
    365
  ).toFixed(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.userCardUpperSection}>
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
        <img
          alt='user avatar'
          className={styles.avatar}
          src={user.avatar_url}
        />
      </div>
      <div className={styles.burgerMenuWrapper}>
        <button
          className={
            isActive ? styles.burgerMenuButtonActive : styles.burgerMenuButton
          }
          onClick={() => setIsActive(!isActive)}
        >
          <img alt='burger menu icon' src={BurgerIcon}></img>
        </button>
      </div>
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
            {user.created_at && (
              <p>Created: {createDate.toISOString().slice(0, 10)} </p>
            )}
            <p>Profile age: {difference}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
