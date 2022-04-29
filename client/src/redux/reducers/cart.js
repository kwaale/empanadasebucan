
// import { ADD_PRODUCT_CART } from "../actionsConst";

// const initialState = {
//     cartProducts: [],
    // localCountry : JSON.parse(localStorage.getItem('country')) || {}
// }

// const cartReducer = (state = initialState, action) => {
//     console.log('cartReducer', action.payload)
//     switch (action.type) {
//         case GET_PRODUCTS:
//             return {
//                 ...state,
//                 products: action.payload
//             }
//         case ADD_PRODUCT_CART:
//             return {
//                 ...state,
//                 commerces: state.commerces.concat(action.payload)
//             }
        // case ADD_PRODUCT_CART:
        //     console.log('Reducer add commerce',action.payload)
        //     return {
        //         ...state,
        //         commerces: state.commerces.concat(action.payload)
        //     }
        // case SEARCH_COMMERCE:
        //     console.log('Comercio 1',action.payload)
        //     return {
        //         ...state,
        //         searchCommerces: state.commerces.filter(com => (com.name === action.payload))
        //     }
//         default:
//             return state;
//     }
// }

// export default productsReducer;