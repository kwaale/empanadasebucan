import ButtonProduct from "./ButtonProduct";
import "./products.css";
import { useEffect } from "react";
import { getProducts, deleteCart } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


const Products = () => {

   const { products, cart } = useSelector(state => state.productsReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProducts());
   }, []);
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
         <div>
            {cart?.map((p, i) => {
               return (
                  <ul key={i} className="product-buyList">
                     <button onClick={() => dispatch(deleteCart(p.id))}>
                        {p.quantity} {p.name} $ {p.total?.toFixed(2) || p.price.toFixed(2)}
                     </button>
                  </ul>
               )
            })}
         </div>
         <div>
            {cart.length ? <h2>Total $ {totaliza(cart).toFixed(2)}</h2> : null}
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

