import ButtonProduct from "./ButtonProduct";
import "./products.css";
import { useEffect } from "react";
import { getProducts, deleteCart } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Cart from "./Cart";


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
         </div>
         <div>
            <nav>
               <Link to="/comanda">
                  <h1>Comanda</h1>
               </Link>
            </nav>
         </div>
      </div>
   )
}
export default Products;

