import './App.css';
import 'tailwindcss/tailwind.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { createContext } from 'react';
import React from 'react';

import Screensaver from './pages/Screensaver';


export const GlobalContext = createContext();

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Screensaver />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
