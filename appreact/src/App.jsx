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
import CardPaiement from './pages/CardPaiement';
import OrderNumber from './pages/OrderNumber';
import PaiementStatus from './pages/PaiementStatus';
import ProcessInformation from './pages/ProcessInformation';


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
            <Route path="/cardPaiement" element={<CardPaiement />} />
            <Route path="/orderNumber" element={<OrderNumber />} />
            <Route path="/paiementStatus" element={<PaiementStatus />} />
            <Route path="/processInformation" element={<ProcessInformation/>} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
