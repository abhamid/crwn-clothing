import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { auth } from '../../myfirebase/firebase.utils';
import CartIcon from '../cartIcon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleShoppingCart } from '../../redux/cart/cart-action';

import './header.styles.scss';

const Header = ({ currentUser, cartHidden, toggleCart }) => {
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
        <CartIcon className="option" onClick={toggleCart} />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleShoppingCart())
  };
};

const mapStateToProps = ({ user: { currentUser }, cart: { cartHidden } }) => {
  return {
    currentUser,
    cartHidden
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
