import React from 'react';
import styles from '../../Repository.module.css';
import colors from '../../color.json';

const Language = ({ language }) => {
  const getColor = (language) => {
    const lowerCaseLanguage = language.toLowerCase();
    if (!colors[lowerCaseLanguage]) return '#fff';
    else return colors[lowerCaseLanguage].color;
  };
  return (
    <>
      {language ? (
        <div className={styles.bottomSectionFirst}>
          <div
            className={styles.languageColor}
            style={{ backgroundColor: getColor(language) }}
          ></div>
          <p>{language}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Language;
