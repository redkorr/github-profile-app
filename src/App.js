import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Header, Overview, Repositories } from './components';
import { DataProvider } from './components/Context/DataContext';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <DataProvider>
                <Overview />
              </DataProvider>
            }
          >
            <Route path='repositories' element={<Repositories />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
