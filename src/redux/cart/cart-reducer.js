import { CartActionTypes } from './cart-types';

const INITIAL_STATE = {
  cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CartActionTypes.TOGGLE_CART_ITEMS:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    default:
      return state;
  }
};

export default cartReducer;
