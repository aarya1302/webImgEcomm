import {
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
} from "../constants/getProductScreenConstant";

export default function getProductScreenReducer(state = { data: [] }, action) {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true };
    case PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
