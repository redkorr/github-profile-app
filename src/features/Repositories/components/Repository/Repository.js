import React from 'react';

import { ReactComponent as EyeIcon } from '../../../../assets/eye.svg';
import { ReactComponent as ForkIcon } from '../../../../assets/fork.svg';
import { ReactComponent as StarIcon } from '../../../../assets/star.svg';

import { LastUpdate, Topic, Language } from './components';

import styles from './Repository.module.css';

const Repository = ({ repo }) => {
  const {
    id,
    url,
    name,
    repositoryTopics,
    languages,
    forks,
    stargazerCount,
    watchers,
    pushedAt,
    description,
  } = repo;

  return (
    <div className={styles.wrapper}>
      <a className={styles.repoName} href={url}>
        {name}
      </a>
      <p>{description}</p>
      <div className={styles.flexWrapper}>
        {repositoryTopics.nodes.length > 0 &&
          repositoryTopics.nodes.map((topic) => (
            <Topic key={`${id} ${topic.topic.name}`} topic={topic.topic.name} />
          ))}
      </div>
      <div className={styles.bottomSection}>
        <Language language={languages.nodes} />

        <div className={styles.flexWrapper}>
          <div className={styles.flexWrapper}>
            <ForkIcon />
            <p>{forks.totalCount}</p>
          </div>
          <div className={styles.flexWrapper}>
            <StarIcon />
            <p>{stargazerCount}</p>
          </div>
          <div className={styles.flexWrapper}>
            <EyeIcon />
            <p>{watchers.totalCount}</p>
          </div>
        </div>
        <LastUpdate pushed_at={pushedAt} />
      </div>
    </div>
  );
};

export default Repository;
