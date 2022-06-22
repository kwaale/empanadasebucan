import './CartProducts.css';
import { deleteProductCart } from '../../redux/actions/orders';
import { useDispatch } from 'react-redux';
import { COMBOS_DISCONT } from '../../redux/actionsConst.js';


const ItemCart = ({ id, name, quantity, price, discount }) => {
    const dispatch = useDispatch();
    return (
        <button className='btn-cart'
            onClick={discount ? () => dispatch({
                type: COMBOS_DISCONT, payload:
                {
                    id,
                    simbol: '-'
                }
            })
                : () => dispatch(deleteProductCart(id))}>
            <p>{quantity} {name}</p>
            {discount ? <p>- $ {(discount * quantity).toFixed(2)}</p> :
                <p>$ {(price * quantity).toFixed(2)}</p>}
        </button>
    )
}
export default ItemCart;