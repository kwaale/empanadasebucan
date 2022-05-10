import './CartProducts.css';
import { deleteProductCart } from '../../redux/actions/orders';
import { useDispatch } from 'react-redux';


const ItemCart = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <button className='btn-cart' onClick={() => dispatch(deleteProductCart(product.id))}>
            <p>{product.quantity} {product.name}</p>
            <p>$ {(product.price * product.quantity).toFixed(2)}</p>
        </button>
    )
}
export default ItemCart;