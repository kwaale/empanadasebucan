import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/actions/orders";
import "./products.css";

const ButtonProduct = ({product}) => {
    
    const colorButton = (category) => {
        if(category === "normal")return "btn-normal";
        if(category === "especial")return "btn-especial";
        if(category === "gourmet")return "btn-gourmet";
        if(category === "bebida")return "btn-bebida";
    }

    const dispatch = useDispatch();
    return(
        <div>
            <button className={colorButton(product.category)} onClick={()=>{dispatch(addProductCart(product))}}>
                <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>$ {product.price.toFixed(2)}</p>
                </div>
            </button>
        </div>
    )
}
export default ButtonProduct;