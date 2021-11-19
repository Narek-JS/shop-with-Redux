
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Continer } from '../..';
import { WORDS } from '../../../consts/words';
import { selectProducts } from '../../../store/Products/selector';
import classes from './style.module.css';

const Main = () => {
    const products = useSelector(selectProducts).products; 

    const allProducts = useMemo(() => ( 
        products.map(product => (
            <div key={product.id} className={classes.productBox}>
                <Link to={`${WORDS.PATHS.PRODUCTS}/${product.id}`} className={classes.link} >
                    <div className={classes.wrapperProductImg}>
                        <img 
                            src={product.image} 
                            alt={product.category}
                            className={classes.productImg}
                        />
                    </div>
                    <div className={classes.row} />
                    <div className={classes.wrapperContant}>
                        <p className={classes.productTitle}>{product.title}</p>
                        <p className={classes.productPrice}>$ {product.price}</p>
                        <p className={classes.productCategory}>{product.category}</p>
                    </div>
                </Link>
            </div>
        ))
    ), []);

    return (
        <main className={classes.main}>
            <Continer>
                <section className={classes.wrapperMainContant}>
                    {allProducts}
                </section>
            </Continer>
        </main>
    );
};

export { Main };