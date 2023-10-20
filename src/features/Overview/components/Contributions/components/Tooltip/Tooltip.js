import React from 'react';
import styles from '../../Contributions.module.css';

const Tooltip = ({ content }) => {
  return (
    <div>
      <div>
        <p className={styles.tooltipText}>{content}</p>
      </div>
    </div>
  );
};

export default Tooltip;
