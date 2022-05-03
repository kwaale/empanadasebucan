import ButtonProduct from "./ButtonProduct";
import "./products.css";
import { useEffect } from "react";
import { getProducts, deleteCart } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Cart from "./Cart";
import MetodosPago from "./MetodosPago";


const Products = () => {

   const { products, cart } = useSelector(state => state.productsReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);
   // funcion sumatoria eliminar
   const totaliza = (arr) => {
      let sum = 0;
      arr.forEach(e => {
         sum += e.total || e.price
      })
      return sum;
   }
   return (
      <div>
         <div className="products">
            {products?.map(product => (
               <ButtonProduct key={product.id} product={product} />
            ))}
         </div>
         <div className="content-cart-products">
            {cart?.map((p, i) => {
               return (
                  <Cart
                     deleteCart={() => dispatch(deleteCart(p.id))}
                     quantity={p.quantity}
                     name={p.name}
                     total={p.total}
                     price={p.price}
                     key={i} />
               )
            })}
            <div>
               {cart.length ? <h2>Total $ {totaliza(cart).toFixed(2)}</h2> : null}
            </div>
            <div className="container-inputs">
               Cliente
               <input type="text" />
               Direccion
               <input type="text" />
               Observacion
               <input type="text" />
               Referencia
               <input type="text" />
               Delivery/Pick Up
               <input type="text" />
               Metodo de Pago
               <MetodosPago />
               <input type="text" />
            </div>
         </div>
         <div>
            <nav>
               <Link to="/comanda">
                  <button onClick={()=>console.log("comanda")}>Comanda</button>
               </Link>
            </nav>
         </div>
      </div>
   )
}
export default Products;

/**
 * Cliente
 * Metodo de pago
 * Direccion
 * Observacion
 * Referencia
 */