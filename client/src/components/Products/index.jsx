import ButtonProduct from "./ButtonProduct";
import OrderForm from "../Orders/OrderForm";
import "./products.css";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/products";
// import { orderGenerator } from "../../redux/actions/orders";
import { useSelector, useDispatch } from "react-redux";
// import CartProducts from "../CartProducts";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Total from "../CartProducts/Total";



const Products = () => {

   const { products } = useSelector(state => state.productsReducer);
   // const { order, cart, total_cart } = useSelector(state => state.orderReducer);
   const dispatch = useDispatch();
   // console.log("Tasa", tasa);
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
            <OrderForm />
         </div>
      </div >
   )
}
export default Products;
