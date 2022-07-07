import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleRedirect();
  };

  const handleRedirect = () => navigate(`/${inputRef.current.value}`);
  return (
    <div>
      <input type='text' ref={inputRef} onKeyDown={(e) => handleEnter(e)} />
      <button type='button' onClick={handleRedirect}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
