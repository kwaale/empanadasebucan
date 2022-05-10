import { useSelector } from "react-redux"
import ItemCart from "./ItemCart";
import { useState } from "react";

const CartProducts = () => {
    const { order } = useSelector(state => state.orderReducer);
    const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);

    return (
        <div>
            {order.cart.map(p => (
                <ItemCart key={p.id} product={p} />

            ))}
            {order.total > 0 ?
                <div>
                    <h3>Total:</h3>
                    <p>US$ {order.total.toFixed(2)}</p>
                    <p>Bs. {(order.total * tasa).toFixed(2)}</p>
                </div>
                : null}
        </div>
    );
}
export default CartProducts;
