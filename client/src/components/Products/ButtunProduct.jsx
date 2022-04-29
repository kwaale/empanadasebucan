import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/productsActions";
import "./products.css";

const ButtunProduct = ({product}) => {

    const dispatch = useDispatch();
    return(
        <div >
            <button className="product" onClick={()=>{dispatch(addCart(product.id))}}>
                <h3>{product.name}</h3>
                <p>$ {product.price.toFixed(2)}</p>
                <h1 role="img">{product.icon}</h1>
            </button>
        </div>
    )
}
export default ButtunProduct;