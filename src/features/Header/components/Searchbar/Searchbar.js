import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Header.module.css';

const Searchbar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleRedirect();
  };

  const handleRedirect = () => navigate(`/${inputRef.current.value}`);
  return (
    <div>
      <input
        className={styles.searchbar}
        type='text'
        ref={inputRef}
        onKeyDown={(e) => handleEnter(e)}
      />
      <button
        className={styles.inputButton}
        type='button'
        onClick={handleRedirect}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
