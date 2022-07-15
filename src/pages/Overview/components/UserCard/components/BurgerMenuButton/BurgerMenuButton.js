import React from 'react';

import BurgerIcon from '../../../../../../assets/burger-menu.svg';
import styles from './BurgerMenuButton.module.css';

const BurgerMenuButton = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.burgerMenuWrapper}>
      <button
        className={
          isActive ? styles.burgerMenuButtonActive : styles.burgerMenuButton
        }
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <img alt='burger menu icon' src={BurgerIcon} />
      </button>
    </div>
  );
};

export default BurgerMenuButton;
