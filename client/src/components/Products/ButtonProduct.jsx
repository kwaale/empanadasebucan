import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/productsActions";
import "./products.css";

const ButtonProduct = ({product}) => {

    const dispatch = useDispatch();
    return(
        <div>
            <button className="product" onClick={()=>{dispatch(addCart(product.id))}}>
                <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>$ {product.price.toFixed(2)}</p>
                <h1 role="img">{product.icon}</h1>
                </div>
            </button>
        </div>
    )
}
export default ButtonProduct;