import { Routes, Route } from "react-router-dom";
import { Home, Product } from '../pages'
import { WORDS } from "../consts/words";

const Router = () => (
    <Routes>
        <Route exact path={WORDS.PATHS.HOME} element={<Home />} />
        <Route path={`/${WORDS.PATHS.PRODUCTS}/:id`} exact element={<Product />} />
    </Routes>
);

export { Router };