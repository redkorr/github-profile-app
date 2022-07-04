import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Header, Overview, Repositories } from './components';

import './App.css';

function App() {
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
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Overview userData={userData} />}>
            <Route path='repositories' element={<Repositories />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
