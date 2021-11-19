import { TOGGLE_PRODUCTS } from '../actionTypes';

const initialState = {
    products: [],
    loading:false
 };

const toggleProducts = (state, payload) => {
  const { products } = payload;
    
  return {
    ...state,
    loading: true,
    products: products
  }
}

export const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case TOGGLE_PRODUCTS: return toggleProducts(state, payload);

    default: return state;
  }
};