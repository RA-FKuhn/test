import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { HomePage, ContactPage } from './pages';
import { AppHeader, AppFooter } from './components';

function App() {

  return (
    <React.Fragment>
      <AppHeader />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='contact' element={<ContactPage />} />
            <Route path='' element={<HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
