import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/authenticationConstants";
import { SIGNOUT_REQUEST } from "../constants/authenticationConstants";

export function login(state = { user: undefined }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case SIGNOUT_REQUEST:
      return { loading: false, user: {} };
    default:
      return state;
  }
}
