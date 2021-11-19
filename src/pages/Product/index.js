import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductView } from "../../components";
import { WORDS } from "../../consts/words";
import { getProduct } from "../../services/http";
import { toggleProduct, toggleProductLoading } from "../../store/Product/action";
import { selectProduct } from "../../store/Product/selector";

const Product = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    useEffect(() => {   
        dispatch( toggleProductLoading(true) );
        getProduct(`${WORDS.PATHS.PRODUCTS}/${id}`).then((response) => { 
            dispatch( toggleProduct(response) );
        });
    }, []);

    return  product.loading ? 
                <span> {WORDS.LOADING} </span> :
                    <ProductView /> 
};
export { Product };