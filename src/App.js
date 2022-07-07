import { Overview, Repositories } from './pages';
import { Header } from './features';
import { DataProvider } from './context/DataContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
