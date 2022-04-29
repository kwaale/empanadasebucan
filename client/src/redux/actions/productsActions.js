import { GET_PRODUCTS, ADD_PRODUCT_CART, DELETE_PRODUCT_CART} from "../actionsConst";
import { products } from "../../seeds/products";
// export function addMovieFavorite(payload) {
//     return { type: "ADD_MOVIE_FAVORITE", payload };
//   }
  
//   export function getMovies(titulo) {
//     return function(dispatch) {
//       return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: "GET_MOVIES", payload: json });
//         });
//     };
//   }

export const getProducts = ()=>{
    return {
        type:GET_PRODUCTS,
        payload:products
    }
}

export const addCart = (id)=>{
    return {
        type:ADD_PRODUCT_CART,
        payload:id
    }
}

export const deleteCart = (id1)=>{
    console.log("Action id1 ", id1)
    return {
        type:DELETE_PRODUCT_CART,
        payload:id1
    }
}
