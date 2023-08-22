import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Banner.css';
import postronLogo from '../images/POSTRON_logo_web.png'
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

  return (
    <div className="banner">
        <img src={postronLogo} width={300} height={200} />

        { isHomePage ? null : <Link to="/" >Home</Link> }
    </div>
  );
};

export default Banner;