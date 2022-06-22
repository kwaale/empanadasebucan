import ButtonProduct from "./ButtonProduct";
import OrderForm from "../Orders/OrderForm";
import ButtonMinis from "./ButtonMinis";
import ButtonCombo from "./ButtonCombo";
import "./products.css";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/products";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { combos } from "../../seeds";
// import CartProducts from "../CartProducts";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Total from "../CartProducts/Total";

const ButtonProducts = () => {
   const { products } = useSelector(state => state.productsReducer);
   const [minis, setMinis] = useState(true)
   const dispatch = useDispatch();
   // console.log("Tasa", tasa);
   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   const validaMinis = () => {
      minis ? setMinis(false) : setMinis(true)
      // console.log("Minis", minis)
   }

   const colorButton = (clase) => {
      if (clase === "normal") return "btn-normal";
      if (clase === "especial") return "btn-especial";
      if (clase === "gourmet") return "btn-gourmet";
      if (clase === "bebida") return "btn-bebida";
      if (clase === "normal-mini") return "btn-normal";
      if (clase === "especial-mini") return "btn-especial";
      if (clase === "gourmet-mini") return "btn-gourmet";
      if (clase === "mini") return "btn-mini";

   }

   return (
      <div>
         <div className="products">
            {products?.map(product => {
               if (minis) {
                  if (
                     product.category === "normal" ||
                     product.category === "especial" ||
                     product.category === "gourmet" ||
                     product.category === "bebida"
                  ) return <ButtonProduct key={product.id} product={product} colorButton={colorButton} />
                  else return null
               } else if (product.category === "normal-mini" ||
                  product.category === "especial-mini" ||
                  product.category === "gourmet-mini") {
                  return <ButtonProduct key={product.id} product={product} colorButton={colorButton} />
               } else return null
            })}
            <ButtonMinis validaMinis={validaMinis} minis={minis} colorButton={colorButton} />
         </div>
         <div className="container-combos">
            {combos?.map(combo => {
               return (
                  <ButtonCombo key={combo.id} combo={combo} colorButton={colorButton} />
               )
            })
            }
         </div>
         <div className="content-cart-form">
            <OrderForm />
         </div>
      </div >
   )
}

export default ButtonProducts;