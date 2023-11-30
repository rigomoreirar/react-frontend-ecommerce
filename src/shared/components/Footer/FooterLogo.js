import React from "react";
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './FooterLogo.css';

const FooterLogo = () => {
    return (
        <React.Fragment>
        <div className="footer-container__logo">
            
            <h1>
                <Link to="/">
                    <img src={Logo} alt="Company Logo" className='logo-footer'/>
                    <span>Company</span>
                </Link>
            </h1>
        </div>

            <div className="footer-copyright">
                <span className="footer-copyright__text">
                    © {new Date().getFullYear()} Company Name. All rights reserved.
                </span>
            </div>
            </React.Fragment>
    );
};

export default FooterLogo;
