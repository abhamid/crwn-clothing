import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import './header.styles.scss';

const Header = props => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contacts" className="option">
          CONTACTS
        </Link>
      </div>
    </div>
  );
};

export default Header;
