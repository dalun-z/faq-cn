import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css//App.css';
import './css/Doc.css';
import './css/Banner.css';

import Home from './Pages/Home';
import Banner from './Routes/Banner';
import PostronWebFAQ from './Pages/Postron_Web_FAQ';
import PostronAppFAQ from './Pages/Postron_App_FAQ';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {
        isLoading ? (
          <div className='loading-indicator'><img alt='' src={require('./images/Postron_Rotate_Logo.png')} style={{ width: '100px', height: '100px' }}></img></div>
        ) : (
          <>
            <Banner />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pos-faq-page' element={<PostronAppFAQ />} />
              <Route path='/web-faq-page' element={<PostronWebFAQ />} />
            </Routes>
          </>
        )
      }
    </Router>
  );
}

export default App;
