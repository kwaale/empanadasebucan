import Product from "./ButtunProduct";
import "./products.css";
import { useEffect } from "react";
import { getProducts, deleteCart } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {

    const { products, cart } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    // funcion sumatoria eliminar
    const totaliza = (arr) => {
        let sum = 0;
        arr.forEach(e => {
            sum += e.price
        })
        return sum;
    }
    return (
        <div style={{ color: "white" }}>
            <div className="products">
                {products?.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div>
                {cart?.map((p,i) => {
                    return (
                        <ul key={i} className="product-buyList">
                            <button onClick={()=>dispatch(deleteCart(p.id))}>
                            {i} {p.name} {p.price.toFixed(2)}
                            </button>
                        </ul>
                    )
                })}
            </div>
            <div>
                <h2>Total</h2>
                <h3>$ {totaliza(cart).toFixed(2)}</h3>
            </div>
        </div>
    )
}
export default Products;