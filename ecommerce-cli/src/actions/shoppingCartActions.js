const { default: axios } = require("axios");
const {
  GET_SHOPPING_productS_REQUEST,
  GET_SHOPPING_productS_SUCCESS,
  GET_SHOPPING_productS_FAIL,

  ADD_TO_SHOPPING_CART_REQUEST,
  ADD_TO_SHOPPING_CART_SUCCESS,
  ADD_TO_SHOPPING_CART_FAIL,
  REMOVE_FROM_SHOPPING_CART_REQUEST,
  REMOVE_FROM_SHOPPING_CART_FAIL,
  REMOVE_FROM_SHOPPING_CART_SUCCESS,
} = require("../constants/shoppingCartConstants");
const { server_address } = require("../globalVariables");

const getShoppingCartItems = async (dispatch) => {
  dispatch({
    type: GET_SHOPPING_productS_REQUEST,
    payload: { loading: true },
  });
  try {
    let data = await axios.get(server_address + "/getShoppingCartItems");
    dispatch({ type: GET_SHOPPING_productS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SHOPPING_productS_FAIL, payload: error.message });
  }
};

export const addToCartAction = (user_id, product) => async (dispatch) => {
  dispatch({ type: ADD_TO_SHOPPING_CART_REQUEST });
  try {
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cart.forEach((e) => {
      if (e._id === product._id) throw Error("item already in cart");
    });
    var res = await axios.get(
      `${server_address}/add_to_cart/${user_id}/${product._id}`
    );

    localStorage.setItem("cart", JSON.stringify(res.data));
    dispatch({
      type: ADD_TO_SHOPPING_CART_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: ADD_TO_SHOPPING_CART_FAIL, payload: error.message });
  }
};

export const removeFromCartAction = (user_id, cartItem) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_SHOPPING_CART_REQUEST,
    payload: { loading: true },
  });
  try {
    var res = await axios.post(
      `${server_address}/removeCartItem/${user_id}/${cartItem}`
    );

    localStorage.setItem("cart", JSON.stringify(res.data));
    dispatch({ type: REMOVE_FROM_SHOPPING_CART_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REMOVE_FROM_SHOPPING_CART_FAIL, payload: error.message });
  }
};
