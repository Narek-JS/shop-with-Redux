import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Header } from "..";
import { Main } from "./Main";


const Product = () => {    
    return (
        <Fragment>
            <Header />
            <Main />
        </Fragment>
    );
};

export default Product;