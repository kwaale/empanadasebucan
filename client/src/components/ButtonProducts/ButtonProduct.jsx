import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/actions/orders";
import "./products.css";

const ButtonProduct = ({ product, colorButton }) => {

    const dispatch = useDispatch();
    return (
        <div className="card-product">
            <button className={colorButton(product.category)} onClick={() => { dispatch(addProductCart(product)) }}>
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p>$ {product.price.toFixed(2)}</p>
                </div>
            </button>
        </div>
    )
}
export default ButtonProduct;