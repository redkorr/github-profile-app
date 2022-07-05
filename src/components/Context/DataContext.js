import React, { useContext, useEffect, useState } from 'react';

const DataContext = React.createContext();
export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const res = await fetch('https://api.github.com/users/redkorr');
    const data = await res.json();

    setUserData(data);
  };
  const [userData, setUserData] = useState(fetchUserProfile);

  return (
    <DataContext.Provider value={userData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
