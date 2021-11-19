import { TOGGLE_PRODUCT } from '../actionTypes';
import { TOGGLE_PRODUCT_LOADING } from '../actionTypes';
export const toggleProduct = (product) => {
    return {
        type: TOGGLE_PRODUCT,
        payload: {product}
    }
}

export const toggleProductLoading = (isLoading) => {
    return {
        type: TOGGLE_PRODUCT_LOADING,
        payload: {isLoading}
    }
}