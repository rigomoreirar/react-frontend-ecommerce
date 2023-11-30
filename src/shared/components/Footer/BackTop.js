import React from "react";

import './BackTop.css';

const BackTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return (
        <button 
            className="button__footer__back-to-top" 
            onClick={scrollToTop}
        >
            Back to top
        </button>
    );
};

export default BackTop;
