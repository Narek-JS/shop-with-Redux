import { createStore, combineReducers } from "redux";

import { productsReducer } from "./Products/reducer";
import { productReducer } from './Product/reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer
});


export const store = createStore(rootReducer);