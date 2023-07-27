import './css//App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postron_Machine_FAQ from './Pages/Postron_Machine_FAQ';
import Home from './Pages/Home';
import Banner from './Pages/Banner';

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pos-faq-page' element={<Postron_Machine_FAQ/>}/>
      </Routes>
    </Router>
  );
}

export default App;
