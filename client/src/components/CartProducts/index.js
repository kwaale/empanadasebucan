import ItemCart from "./ItemCart";

const CartProducts = ({ cart, total_cart, tasa, zonas_delivery }) => {
    return (
        <div>
            {cart.map(p => (
                <ItemCart key={p.id} product={p} />
            ))}
            {total_cart > 0 ?
                <div>
                    {/* Total con delivery incluido */}
                    <h4>Total: US$ {(total_cart + zonas_delivery?.reduce((acum, z) => z.active ? acum + z.amount : acum, 0)).toFixed(2)}
                     / Bs. {((total_cart + zonas_delivery?.reduce((acum, z) => z.active ? acum + z.amount : acum, 0)) * tasa).toFixed(2)}</h4>
                </div>
                : null}
        </div>
    );
}
export default CartProducts;
