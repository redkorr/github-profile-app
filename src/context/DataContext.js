import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userRepositories, setUserRepositories] = useState([]);

  const fetchUserProfile = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json();

    setUserData(data);
  };
  const fetchUserRepositories = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await res.json();

    setUserRepositories(data);
  };

  const useData = (name) => {
    useEffect(() => {
      fetchUserProfile(name);
    }, [name]);

    return userData;
  };
  const useRepositories = (name) => {
    useEffect(() => {
      fetchUserRepositories(name);
    }, [name]);

    return userRepositories;
  };

  const providerValue = {
    userData,
    userRepositories,
    useData,
    useRepositories,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
