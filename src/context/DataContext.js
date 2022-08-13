import React, { createContext, useEffect, useState } from 'react';

import getUser from '../api/getUser';
import getUserContributions from '../api/getUserContributions';
import getUserRepositories from '../api/getUserRepositories';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userRepositories, setUserRepositories] = useState([]);
  const [userContributions, setUserContributions] = useState([]);

  const fetchUserProfile = async (name) => {
    const data = await getUser({ login: name });

    setUserData(data.user);
  };

  const fetchUserRepositories = async (name) => {
    const data = await getUserRepositories({ login: name });

    setUserRepositories(data.user.repositories.edges);
  };

  const fetchUserContributions = async (name) => {
    const data = await getUserContributions({ login: name });

    setUserContributions(data.user);
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

  const useContributions = (name) => {
    useEffect(() => {
      fetchUserContributions(name);
    }, [name]);

    return userContributions;
  };

  const providerValue = {
    userData,
    userRepositories,
    userContributions,
    useData,
    useRepositories,
    useContributions,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
