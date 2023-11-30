import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';
import ProductSearchBar from './ProductSearchBar';
import Logo from '../../assets/logo.png';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const products = [
    { id: '123123', name: 'banana' },
    { id: '387487329', name: 'orange' },
    { id: '3874865', name: 'orangine' },
    { id: '09829', name: 'okamine' },
    { id: '982329', name: 'orangutan' },];
  
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

        <MainHeader>
          <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="main-navigation__title">
            <h1>
              <Link to="/">
                <img src={Logo} alt="Company Logo" className='logo'/>
                <span>Company</span>
              </Link>
            </h1>
          </div>
          <ProductSearchBar products={products}/>
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>

          <div className="header-div__second">
            <button 
              className="show-categories__header-btn" 
              onClick={openDrawerHandler}
            >
              Show Categories
            </button>
          </div>

        </MainHeader>

    </React.Fragment>
  );
};

export default MainNavigation;