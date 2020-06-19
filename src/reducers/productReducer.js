import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_ALL_PRODUCT, EDIT_PRODUCTS, DELETE_PRODUCTS, VIEW_PRODUCT_DETAIL, SELECTED_PRODUCTS, ADD_PRODUCTS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        cart: { ..._.mapKeys(action.payload, "id") },
        selectedProducts: { ..._.mapKeys(action.payload, "id") },
      };
    case SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: { ..._.mapKeys(action.payload, "id") },
      };
    case FETCH_ALL_PRODUCT:
      return { ...state, allProduct: { ..._.mapKeys(action.payload, "id") } };
    case VIEW_PRODUCT_DETAIL:
      return { ...state, currentProduct: action.payload };
    case ADD_PRODUCTS:
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: action.payload },
      };
    case EDIT_PRODUCTS:
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: action.payload },
      };
    case DELETE_PRODUCTS:
      console.log(state.cart);
      return { ...state, cart: _.omit(state.cart, action.payload) };
    default:
      return state;
  }
};