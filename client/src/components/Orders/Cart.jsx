import './Order.css';

const Cart = ({ deleteProductCart, quantity, name, total, price }) => {
    return (
        <button className='btn-cart' onClick={() => deleteProductCart()}>
            <p>{quantity} {name}</p>
            <p>$ {total?.toFixed(2) || price.toFixed(2)}</p>
        </button>
    )
}
export default Cart;