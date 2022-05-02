import './products.css';

const Cart = ({ deleteCart, quantity, name, total, price }) => {
    return (
        <button className='btn-cart' onClick={() => deleteCart()}>
            <p>{quantity} {name}</p>
            <p>$ {total?.toFixed(2) || price.toFixed(2)}</p>
        </button>
    )
}
export default Cart;