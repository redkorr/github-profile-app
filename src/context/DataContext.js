import React, { createContext, useEffect, useState } from 'react';
import getUser from '../api/getUser';
import getUserRepositories from '../api/getUserRepositories';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userRepositories, setUserRepositories] = useState([]);

  const fetchUserProfile = async (name) => {
    const data = await getUser({ login: name });

    setUserData(data.user);
  };

  const fetchUserRepositories = async (name) => {
    const data = await getUserRepositories({ login: name });

    setUserRepositories(data.user.repositories.edges);
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
