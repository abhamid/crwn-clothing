import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = props => {
  return (
    <div className="cart-icon" onClick={props.onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
