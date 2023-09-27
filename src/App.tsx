import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DarkModeProvider } from './context/darkmode';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/home';
import Header from './components/Header/header';
import NotFoundPage from './pages/NotFound/notfound';
import AboutPage from './pages/About/about';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </DarkModeProvider>
    </div>
  );
}

export default App;
