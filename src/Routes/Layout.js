import React from 'react';
import '../css/Layout.css';
import '../css/Banner.css';
import Banner from './Banner';
import { globalSettings } from '../global/global';

const Layout = ({ sidebar, mainContent }) => {
  return (
    <>
      <Banner />
      <div className="layout">
        <div className="sidebar" style={{ backgroundColor: globalSettings.bgColor }}>
          {sidebar}
        </div>
        <div className="main-content">
          {mainContent}
          <br /><br /><br /><br />
        </div>
      </div>
    </>
  );
};

export default Layout;