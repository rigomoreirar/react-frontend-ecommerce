import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';
import Cart from '../../assets/cart.png';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
      {!auth.isLoggedIn &&
          <NavLink to="/auth" exact className="nav-link-item">
            <span className="nav-link-greeting">Hello!</span><br/>
            <span className="nav-link-account">Account</span>
          </NavLink>
      }
      {auth.isLoggedIn &&
        
        <NavLink to="/auth" exact className="nav-link-item">
          <span className="nav-link-greeting">Hello!</span><br/>
          <span className="nav-link-account">Account</span>
        </NavLink>
      

      }
      </li>
      <li>
        <NavLink to="/" exact>
          <img src={Cart} alt="Cart"></img>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
