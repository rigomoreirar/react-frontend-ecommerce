import React from 'react';

import BackTop from './BackTop';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

import './MainFooter.css';

const MainFooter = () => {
    return (
      <footer className="main-footer">
          <BackTop />
          <FooterLinks />
          <FooterLogo />
      </footer>
    );
  };
  
  export default MainFooter;
  
