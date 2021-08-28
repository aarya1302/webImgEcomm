const { default: axios } = require("axios");
const {
  GET_SHOPPING_CART_ITEMS_REQUEST,
  GET_SHOPPING_CART_ITEMS_SUCCESS,
  GET_SHOPPING_CART_ITEMS_FAIL,
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
