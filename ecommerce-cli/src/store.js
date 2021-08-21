import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { signInAction } from "./actions/authenticationActions";
import login from "./reducers/authenticationReducers";
import getProductScreenReducer from "./reducers/getProductScreenReducer";
import getProductsReducer from "./reducers/getProductsReducer";

var initialState = {};
var reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductScreen: getProductScreenReducer,
  user: login,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = new createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
