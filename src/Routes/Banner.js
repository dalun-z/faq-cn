import React from 'react';
import { Link } from 'react-router-dom';
import '../css//App.css';
import '../css/Doc.css';
import '../css/Banner.css';
import postronLogo from '../images/POSTRON_logo_web.png'
import { useLocation } from 'react-router-dom';
import { globalSettings } from '../global/global';

const Banner = () => {
  // const location = useLocation();

  // const isHomePage = location.pathname === '/';

  return (
    // beta published version
    <div className='banner' style={{ backgroundColor: globalSettings.bgColor }}>
      <img alt='' src={postronLogo} width={300} height={200} />
    </div>

    
    // isHomePage ? null : (
    //   <div className="banner" style={{ backgroundColor: globalSettings.bgColor }}>
    //     <img alt='' src={postronLogo} width={300} height={200} />
    //     <Link to="/faq-cn" >首頁</Link>
    //   </div>
    // )
  );
};

export default Banner;