import { bindActionCreators } from "redux";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/authenticationConstants";

export function login(state = { user: undefined }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export function signUp(state = { user: undefined }, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { loading: true };
    case SIGNUP_SUCCESS:
      return { loading: false, response: action.payload };
    case SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
