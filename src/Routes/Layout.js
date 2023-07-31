import React from 'react';
import '../css/Layout.css'; // Import the CSS file for styling

const Layout = ({ sidebar, mainContent }) => {
    return (
      <div className="layout">
        <div className="sidebar">{sidebar}</div>
        <div className="main-content">{mainContent}</div>
      </div>
    );
  };
  
  export default Layout;