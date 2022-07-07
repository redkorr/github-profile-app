import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [profileName, setProfileName] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.preventDefault();
    setProfileName(inputRef.current.value);
    navigate(`/${profileName}`);
  };

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button
        type='button'
        onClick={(e) => {
          handleRedirect(e);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
