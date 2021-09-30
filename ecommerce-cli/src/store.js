import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import getProductScreenReducer from "./reducers/getProductScreenReducer";
import getProductsReducer from "./reducers/getProductsReducer";
import { login } from "./reducers/loginReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducers";
import { signUp } from "./reducers/signUpReducer";

var initialState = {
  user: {
    loading: false,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null,
    cartLength: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0,
  },
};
var reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductScreen: getProductScreenReducer,
  user: login,
  signUp: signUp,
  cart: shoppingCartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = new createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
