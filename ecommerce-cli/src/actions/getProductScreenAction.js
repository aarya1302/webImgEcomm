import axios from "axios";
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/getProductScreenConstant";

export const getProductScreenAction = (product_id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST, payload: { loading: true } });
  try {
    var res = await axios.get(`http://localhost:5000/product/${product_id}`);
    var data = res.data;
    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: err.message,
    });
  }
};
