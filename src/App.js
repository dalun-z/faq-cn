import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css//App.css';
import './css/Doc.css';
import './css/Banner.css';

import Home from './Pages/Home';
import PostronWebFAQ from './Pages/Postron_Web_FAQ';
import PostronAppFAQ from './Pages/Postron_App_FAQ';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/FAQ_PAGE' element={<Home />} />
        <Route path='/FAQ_PAGE/pos-faq-page' element={<PostronAppFAQ />} />
        <Route path='/FAQ_PAGE/web-faq-page' element={<PostronWebFAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
