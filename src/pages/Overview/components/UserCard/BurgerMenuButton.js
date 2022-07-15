import React from 'react';

import BurgerIcon from '../../../../assets/burger-menu.svg';
import styles from './UserCard.module.css';

const BurgerMenuButton = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.burgerMenuWrapper}>
      <button
        className={
          isActive ? styles.burgerMenuButtonActive : styles.burgerMenuButton
        }
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
      >
        <img alt='burger menu icon' src={BurgerIcon}></img>
      </button>
    </div>
  );
};

export default BurgerMenuButton;
