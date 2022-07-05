import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();
export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const fetchUserProfile = async () => {
    const res = await fetch('https://api.github.com/users/redkorr');
    const data = await res.json();

    setUserData(data);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <DataContext.Provider value={userData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
