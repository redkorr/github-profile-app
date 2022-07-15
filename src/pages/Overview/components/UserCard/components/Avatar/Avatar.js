import React from 'react';

import styles from './Avatar.module.css';

const Avatar = ({ src }) => {
  return <img alt='user avatar' className={styles.avatar} src={src} />;
};

export default Avatar;
