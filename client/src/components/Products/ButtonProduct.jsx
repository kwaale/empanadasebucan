import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/actions/orders";
import "./products.css";

const ButtonProduct = ({product}) => {

    const dispatch = useDispatch();
    return(
        <div>
            <button className="product" onClick={()=>{dispatch(addProductCart(product.id))}}>
                <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>$ {product.price.toFixed(2)}</p>
                </div>
            </button>
        </div>
    )
}
export default ButtonProduct;