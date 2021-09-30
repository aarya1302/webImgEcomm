import {
  ADD_TO_SHOPPING_CART_FAIL,
  ADD_TO_SHOPPING_CART_REQUEST,
  ADD_TO_SHOPPING_CART_SUCCESS,
} from "../constants/shoppingCartConstants";

export const shoppingCartReducer = (state = { cart: undefined }, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_SHOPPING_CART_SUCCESS:
      state.loading = false;
      state.cartItems = action.payload;
      state.cartLength = action.payload.length;
      delete state.cart_error;
      return { ...state };
    case ADD_TO_SHOPPING_CART_FAIL:
      state.loading = false;
      return { ...state, cart_error: action.payload };
    default:
      return state;
  }
};
