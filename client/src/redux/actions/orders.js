import { ADD_ORDER_ORDERS, ADD_PRODUCT_CART, DELETE_PRODUCT_CART, DELETE_CART } from "../actionsConst";
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

export const addOrder = (payload)=>{
    console.log('Action addOrder', payload);
    return {
        type:ADD_ORDER_ORDERS,
        payload
    }
}

export const addProductCart = (id)=>{
    console.log('addProductCart', id)
    return {
        type:ADD_PRODUCT_CART,
        payload:id
    }
}

export const deleteProductCart = (id)=>{
    // console.log("Action id ", id)
    return {
        type:DELETE_PRODUCT_CART,
        payload:id
    }
}

export const deleteCart = ()=>{
    console.log("deleteCart Action ")
    return {
        type:DELETE_CART
    }
}
