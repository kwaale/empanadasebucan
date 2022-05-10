import { useSelector } from "react-redux"
import ItemCart from "./ItemCart";
import { useState } from "react";

const CartProducts = () => {
    const { order } = useSelector(state => state.orderReducer);
    const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);

    const handleChange = (e) => {
        //expresion regular validar solo numeros flotante en un strig
        const regex = /^[0-9]*\.?[0-9]*$/;
        console.log(!regex.test(e.target.value));
        if (regex.test(e.target.value)) {
            setTasa(e.target.value);
            localStorage.setItem('tasa', JSON.stringify(e.target.value));
        }
    }
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
            Tasa Bs./US$
            <input
                onChange={(e) => handleChange(e)}
                value={tasa} type="number"
            />
        </div>
    );
}
export default CartProducts;
