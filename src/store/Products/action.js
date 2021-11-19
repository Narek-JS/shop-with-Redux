import { TOGGLE_PRODUCTS } from '../actionTypes';

export const toggleProducts = (products) => {
    return {
        type: TOGGLE_PRODUCTS,
        payload: {products}
    }
}