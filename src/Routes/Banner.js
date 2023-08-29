import React from 'react';
import { Link } from 'react-router-dom';
import '../css//App.css';
import '../css/Doc.css';
import '../css/Banner.css';
import postronLogo from '../images/POSTRON_logo_web.png'
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

  return (
    isHomePage ? null : (
      <div className="banner">
        <img src={postronLogo} width={300} height={200} />
        <Link to="/" >Home</Link>
    </div>
    )
    
  );
};

export default Banner;