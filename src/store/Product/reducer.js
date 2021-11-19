import { TOGGLE_PRODUCT, TOGGLE_PRODUCT_LOADING } from '../actionTypes';

const initialState = {
    product: {},
    loading: true
 };

const toggleProduct = (state, payload) => {
  const { product } = payload;

  return {
    ...state,
    loading: false,
    product: product
  }
}
const toggleProductLoading = (state, payload) => {
    const { isLoading } = payload;

    return {
        ...state,
        loading:isLoading
    }
}

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case TOGGLE_PRODUCT: return toggleProduct(state, payload);
    case TOGGLE_PRODUCT_LOADING: return toggleProductLoading(state, payload);
    default: return state;
  }
};