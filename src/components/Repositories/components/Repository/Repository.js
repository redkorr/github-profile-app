import React from 'react';

import { ReactComponent as EyeIcon } from '../../../../assets/eye.svg';
import { ReactComponent as ForkIcon } from '../../../../assets/fork.svg';
import { ReactComponent as StarIcon } from '../../../../assets/star.svg';

import { LastUpdate, Topic, Language } from './components';

import styles from './Repository.module.css';

const Repository = ({ repo }) => {
  const {
    id,
    html_url,
    name,
    topics,
    language,
    forks_count,
    stargazers_count,
    watchers_count,
    pushed_at,
    description,
  } = repo;

  return (
    <div className={styles.wrapper}>
      <a className={styles.repoName} href={html_url}>
        {name}
      </a>
      <p>{description}</p>
      <div className={styles.flexWrapper}>
        {topics.map((topic) => (
          <Topic key={`${id} ${topic}`} topic={topic} />
        ))}
      </div>
      <div className={styles.bottomSection}>
        <Language language={language} />

        <div className={styles.flexWrapper}>
          <div className={styles.flexWrapper}>
            <ForkIcon />
            <p>{forks_count}</p>
          </div>
          <div className={styles.flexWrapper}>
            <StarIcon />
            <p>{stargazers_count}</p>
          </div>
          <div className={styles.flexWrapper}>
            <EyeIcon />
            <p>{watchers_count}</p>
          </div>
        </div>
        <LastUpdate pushed_at={pushed_at} />
      </div>
    </div>
  );
};

export default Repository;
