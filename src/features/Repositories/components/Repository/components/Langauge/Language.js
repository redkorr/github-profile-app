import React from 'react';
import styles from '../../Repository.module.css';

const Language = ({ language }) => {
  return (
    <>
      {language[0] ? (
        <div className={styles.bottomSectionFirst}>
          <div
            className={styles.languageColor}
            style={{ backgroundColor: language[0].color }}
          ></div>
          <p>{language[0].name}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Language;
