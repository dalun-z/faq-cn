import './css//App.css';
import './css/Doc.css';
import './css/Banner.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postron_App_FAQ from './Pages/Postron_App_FAQ';
import Home from './Pages/Home';
import Banner from './Routes/Banner';
import Postron_Web_FAQ from './Pages/Postron_Web_FAQ';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay time as needed
  }, []);

  return (
    <Router>
      <Banner />
      {
        isLoading ? (
          <div className='loading-indicator'><img alt='' src={require('./images/Postron_Rotate_Logo.png')} style={{width:'100px', height:'100px'}}></img></div>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pos-faq-page' element={<Postron_App_FAQ />} />
            <Route path='/web-faq-page/*' element={<Postron_Web_FAQ />} />
            <Route path='/web-faq-pages/*' element={<Postron_Web_FAQ />} />
          </Routes>
        )
      }
    </Router>
  );
}

export default App;
