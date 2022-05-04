import { ADD_ORDER_ORDERS } from "../actionsConst";
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
    return {
        type:ADD_ORDER_ORDERS,
        payload
    }
}

// export const addCart = (id)=>{
//     return {
//         type:ADD_PRODUCT_CART,
//         payload:id
//     }
// }

// export const deleteCart = (id)=>{
//     // console.log("Action id ", id)
//     return {
//         type:DELETE_PRODUCT_CART,
//         payload:id
//     }
// }
