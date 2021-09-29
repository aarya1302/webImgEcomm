const { default: axios } = require("axios");
const {
  GET_SHOPPING_CART_ITEMS_REQUEST,
  GET_SHOPPING_CART_ITEMS_SUCCESS,
  GET_SHOPPING_CART_ITEMS_FAIL,

  ADD_TO_SHOPPING_CART_REQUEST,
  ADD_TO_SHOPPING_CART_SUCCESS,
  ADD_TO_SHOPPING_CART_FAIL,
} = require("../constants/shoppingCartConstants");
const { server_address } = require("../globalVariables");

const getShoppingCartItems = async (dispatch) => {
  dispatch({
    type: GET_SHOPPING_CART_ITEMS_REQUEST,
    payload: { loading: true },
  });
  try {
    let data = await axios.get(server_address + "/getShoppingCartItems");
    dispatch({ type: GET_SHOPPING_CART_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SHOPPING_CART_ITEMS_FAIL, payload: error.message });
  }
};

export const addToCartAction = (cart_item) => (dispatch) => {
  dispatch({ type: ADD_TO_SHOPPING_CART_REQUEST });
  try {
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cart.indexOf(cart_item) === -1) cart.push(cart_item);
    else throw Error("item already in cart");

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: ADD_TO_SHOPPING_CART_SUCCESS, payload: cart });
  } catch (error) {
    dispatch({ type: ADD_TO_SHOPPING_CART_FAIL, payload: error.message });
  }
};
