import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/authenticationConstants";
import { server_address } from "../globalVariables";

export const signInAction = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: { loading: true } });
  try {
    var res = await axios.post(
      `${server_address}/login`,
      { email, password },
      { headers: { Content: "application/json" } }
    );

    var user = res.data;
    dispatch({ type: SIGNUP_REQUEST, payload: user });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.message });
  }
};

export const signUpAction = (email, password) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST, payload: { loading: true } });

  try {
    console.log({ email, password });
    var res = await axios.post(
      `${server_address}/signup`,
      { email, password },
      { headers: { Content: "application/json" } }
    );

    var response = { status: res.status, message: res.data };
    dispatch({ type: SIGNUP_SUCCESS, payload: response });
    return;
  } catch (err) {
    dispatch({ type: SIGNUP_FAIL, payload: err.message });
  }
};
