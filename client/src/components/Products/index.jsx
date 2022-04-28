import Product from "./Product";
import "./products.css";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
    
    const {products} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[]);

    return(
        <div className="products">
            {products?.map(product=>(
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default Products;