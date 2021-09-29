import {  ADD_TO_SHOPPING_CART_FAIL, ADD_TO_SHOPPING_CART_REQUEST, ADD_TO_SHOPPING_CART_SUCCESS } from "../constants/shoppingCartConstants";

export const shoppingCartReducer = (state = {cart: undefined}, action) => {
    switch (action.type){
        case ADD_TO_SHOPPING_CART_REQUEST:
            return {loading: true};
        case ADD_TO_SHOPPING_CART_SUCCESS:

            return {loading: false, cart: action.payload};
        case ADD_TO_SHOPPING_CART_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;

    }
}