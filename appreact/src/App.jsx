import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { createContext } from 'react';
import React from 'react';

import Screensaver from './pages/Screensaver';
import Home from './pages/Home';
import Extras from './pages/Extras';
import Expositions from './pages/Expositions';


export const GlobalContext = createContext();

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Screensaver />} />
            <Route path="/home" element={<Home />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/expositions" element={<Expositions />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
