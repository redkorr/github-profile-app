import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const fetchUserProfile = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json();

    setUserData(data);
  };

  const useData = (name) => {
    useEffect(() => {
      fetchUserProfile(name);
    }, [name]);

    return userData;
  };

  const providerValue = {
    userData,
    useData,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
