import axios from "axios";

const URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: URL
});

const getProducts = path => api.get(path);
const getProduct = path => api.get(path);

export { getProducts, getProduct };
