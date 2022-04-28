import { GET_PRODUCTS } from "../actionsConst";
import { products } from "../../seeds/products";


const initialState = {
    products: [],
    // localCountry : JSON.parse(localStorage.getItem('country')) || {}
}

const productsReducer = (state = initialState, action) => {
    console.log('countryReducer', action.payload)
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        // case ADD_COMMERCE:
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
        default:
            return state;
    }
}

export default productsReducer;