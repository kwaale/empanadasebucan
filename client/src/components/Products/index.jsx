import ButtonProduct from "./ButtonProduct";
import OrderForm from "../Orders/OrderForm";
import "./products.css";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/products";
import { useSelector, useDispatch } from "react-redux";
import CartProducts from "../CartProducts";
import { useState } from "react";
import { Link } from "react-router-dom";
import Total from "../CartProducts/Total";



const Products = () => {

   const { products } = useSelector(state => state.productsReducer);
   const { order } = useSelector(state => state.orderReducer);
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <div>
         <div className="products">
            {products?.map(product => (
               <ButtonProduct key={product.id} product={product} />
            ))}
         </div>
         <div className="content-cart-form">
            <CartProducts />
            <Total />
            <OrderForm
               cart={order.cart}
               total={order.total}
                />
         </div>
         <div>
            {/* descomentar */}
            {/* {(orders.length && orders[orders.length - 1].order.cart) ?  */}
            <div>
               <Link to="/comanda"><h1>Ultima Comanda</h1></Link>
               <Link to="/ordenes"><h1>Ordenes</h1></Link>
            </div> 
             {/* : null} */}
         </div>
      </div>
   )
}
export default Products;
