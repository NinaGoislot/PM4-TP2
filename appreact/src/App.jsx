import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { createContext } from 'react';
import React from 'react';

import Screensaver from './pages/Screensaver';
import Home from './pages/Home';
import Extras from './pages/Extras';
import Expositions from './pages/Expositions';
import Paiement from './pages/Paiement';
import Summary from './pages/Summary';


export const GlobalContext = createContext();

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/expositions" element={<Expositions />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/paiement" element={<Paiement />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
