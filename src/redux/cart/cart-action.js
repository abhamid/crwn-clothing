import { CartActionTypes } from './cart-types';

export const toggleShoppingCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_ITEMS
  };
};
