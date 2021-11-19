import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Continer } from "../..";
import { WORDS } from "../../../consts/words";
import { selectProduct } from "../../../store/Product/selector";

import classes from './style.module.css';

const Main = () => {

    const product = useSelector(selectProduct).product.data;
    
    const aboutProduct = useMemo(() =>  (
            <div className={classes.wrapperSectionContant} >
                <div className={classes.wrapperImg}>
                    <img 
                        src={product.image} 
                        alt={product.category} 
                        className={classes.productImg}
                    />
                </div>
                <div className={classes.contant}>
                    <h2 className={classes.title}>{product.title}</h2>
                    <Link className={classes.price} to='#'>{WORDS._$} {product.price}</Link>
                    <p className={classes.category} >{product.category}</p>
                    <p className={classes.description}>{product.description}</p>
                    <button className={classes.button} >{WORDS.ADD_TO_CARD}</button>
                </div>
            </div>
        ),[product]);

    return(
        <main className={classes.main}>
            <Continer>
                <section className={classes.wrapperMainContant}>
                    {aboutProduct}
                </section>
            </Continer>
        </main>
    );
};

export { Main };