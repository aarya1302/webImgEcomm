import {
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/authenticationConstants";

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
