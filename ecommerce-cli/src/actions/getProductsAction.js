import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/getProductsConstants";
import { server_address } from "../globalVariables";

export const getProductsAction = async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    payload: { loading: true },
  });
  try {
    var res = await axios.get(`${server_address}/homeProducts/`);
    var data = res.data;

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message,
    });
  }
};
