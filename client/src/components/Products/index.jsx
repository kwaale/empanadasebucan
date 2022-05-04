import ButtonProduct from "./ButtonProduct";
import OrderForm from "../Orders/OrderForm";
import "./products.css";
import { useEffect } from "react";
import { getProducts, deleteCart } from "../../redux/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useState } from "react";



const Products = () => {

   const { products, cart } = useSelector(state => state.productsReducer);
   const dispatch = useDispatch();
   // setea la tasa en con dato del local Storage o la deja en null
   const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);
   const handleChange = (e) => {
      //expresion regular validar solo numeros flotante en un strig
      const regex = /^[0-9]*\.?[0-9]*$/;
      console.log(!regex.test(e.target.value));
      if (regex.test(e.target.value)) {
         setTasa(e.target.value);
         localStorage.setItem('tasa', JSON.stringify(e.target.value));
      }
   }

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
         <div className="content-cart-form">
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
               {cart.length ?
                  <div>
                     <h2>Total</h2>
                     <h4>
                        US$  {totaliza(cart).toFixed(2)} / Bs. {parseFloat(tasa * totaliza(cart).toFixed(2)).toFixed(2)}
                     </h4>
                  </div> : null}
            </div>
            <OrderForm cart={cart}
            bolivar={parseFloat(tasa * totaliza(cart).toFixed(2)).toFixed(2)}
            dolar={totaliza(cart).toFixed(2)}/>
         </div>
         <div>
            Tasa Bs./US$
            <input
               onChange={(e) => handleChange(e)}
               value={tasa} type="text"
            />
         </div>
      </div>
   )
}
export default Products;