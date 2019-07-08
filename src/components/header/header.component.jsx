import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signinsignup" className="option">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
