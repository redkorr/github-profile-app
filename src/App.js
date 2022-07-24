import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DataProvider } from './context/DataContext';
import { Header } from './features';
import { PageLayout } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            path='/:name'
            element={
              <DataProvider>
                <PageLayout />
              </DataProvider>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
