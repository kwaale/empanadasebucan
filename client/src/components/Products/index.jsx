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
                {cart?.map((p, i) => {
                    return (
                        <ul key={i} className="product-buyList">
                            <button onClick={() => dispatch(deleteCart(p.id))}>
                                {p.name} {p.price.toFixed(2)}
                            </button>
                        </ul>
                    )
                })}
            </div>
            <div>
                {cart.length ? <h2>Total $ {totaliza(cart).toFixed(2)}</h2> : null}
                {cart.length ? <h2>Items {cart?.length}</h2> : null}
            </div>
        </div>
    )
}
export default Products;