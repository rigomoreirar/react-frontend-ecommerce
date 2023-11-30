import React from "react";
import { Link } from 'react-router-dom';
import './FooterLinks.css'; // Ensure this is correctly imported

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-and-policy">Privacy and Policy</Link>
            <Link to="/contact-us">Contact us</Link>
        </div>
    );
};

export default FooterLinks;
