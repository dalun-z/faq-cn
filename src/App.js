import './css//App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postron_Machine_FAQ from './Pages/Postron_Machine_FAQ';
import Home from './Pages/Home';
import Banner from './Pages/Banner';
import Postron_Web_FAQ from './Pages/Postron_Web_FAQ';

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pos-faq-page' element={<Postron_Machine_FAQ/>}/>
        <Route path='/web-faq-page' element={<Postron_Web_FAQ/>}/>
      </Routes>
    </Router>
  );
}

export default App;
