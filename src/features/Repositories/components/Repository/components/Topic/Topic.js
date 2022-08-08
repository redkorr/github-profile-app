import React from 'react';

import styles from '../../Repository.module.css';

const Topic = ({ topic }) => {
  return (
    <div>
      <a className={styles.topic} href={`https://github.com/topics/${topic}`}>
        {topic}
      </a>
    </div>
  );
};

export default Topic;
