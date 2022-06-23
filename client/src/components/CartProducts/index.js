// import { useEffect } from "react";
import ItemCart from "./ItemCart";


const CartProducts = ({ cart, total_cart, tasa, zonas_delivery, combos }) => {
    const combosAdded = combos?.filter(combo => combo.quantity > 0) || [];

    return (
        <div className="card-products">
            {cart?.map(p => (
                <ItemCart
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    quantity={p.quantity}
                    price={p.price} />
            ))}
            {total_cart > 0 ?
                <div>
                    {/* Total con delivery incluido */}
                    <h4>Total: US$ {
                        (total_cart +
                            zonas_delivery?.reduce((acum, z) => z.active ? acum + z.amount : acum, 0) -
                            combos?.reduce((acum, c) => c.quantity > 0 ? acum + c.discount * c.quantity : acum, 0)).toFixed(2)
                    }
                        / Bs. {
                            ((total_cart +
                                zonas_delivery?.reduce((acum, z) => z.active ? acum + z.amount : acum, 0) -
                                combos?.reduce((acum, c) => c.quantity > 0 ? acum + c.discount * c.quantity : acum, 0)) *
                                tasa).toFixed(2)}
                    </h4>
                </div>
                : null}
            {combosAdded.length > 0 ?
                <div>
                    Combos
                    {combosAdded.map(combo => (
                        <ItemCart
                            key={combo.id}
                            id={combo.id}
                            name={combo.name}
                            quantity={combo.quantity}
                            discount={combo.discount} />
                    ))}
                </div>
                : null}
        </div>
    );
}
export default CartProducts;