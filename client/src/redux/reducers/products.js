import { GET_PRODUCTS, ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from "../actionsConst";

const initialState = {
    products: [],
    cart : []
    // cart : [] || JSON.parse(localStorage.getItem('country'))
}

const productsReducer = (state = initialState, action) => {
    console.log('productsReducer', action.payload, action.type)
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT_CART:
            // corregir este
            let product = state.products.find(p=>p.id == action.payload);
            // console.log("state.cart.length + 1",state.cart.length + 1)
            // console.log("product",product)
            // console.log("state.cart",state.cart)
            // product.id = state.cart.length + 1
            return {
                ...state,
                cart: [...state.cart, product]
            }          
        case DELETE_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.filter(product => (product.id !== action.payload))
            }
        default:
            return state;
    }
}

export default productsReducer;