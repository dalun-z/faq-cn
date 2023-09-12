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
      // <Router>
      //   <Routes>
      //     <Route path='/faq-cn' element={<Home />} />
      //     <Route path='/faq-cn/pos-faq-page' element={<PostronAppFAQ />} />
      //     <Route path='/faq-cn/web-faq-page' element={<PostronWebFAQ />} />
      //   </Routes>
      // </Router>

      <PostronWebFAQ />
  );
}

export default App;
