import { HomeView } from "../../components";
import { getProducts } from "../../services/http";
import { WORDS } from "../../consts/words";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/Products/selector";
import { toggleProducts } from "../../store/Products/action";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        getProducts(WORDS.PATHS.PRODUCTS).then((response) => {
            dispatch(toggleProducts(response.data));
        });
    }, []);
   
    return  products.loading ? 
                <HomeView /> : 
                    <span> {WORDS.LOADING} </span>
};

export { Home };