import { GET_PRODUCTS, ADD_PRODUCT_CART, DELETE_PRODUCT_CART, DELETE_CART } from "../actionsConst";

const initialState = {
    products: [],
    cart : [],
    order:{
        id: 0,
        client:"",
        address:"",
        observations:"",
        reference:"",
        pay_method:[],
        delivery:false,
        order_date: new Date(),
        order_status: "Pendiente",
        order_products: [],
        total: 0.00
    }
    // cart : [] || JSON.parse(localStorage.getItem('country'))
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT_CART:
            let product = state.products.find(p=>p.id === action.payload);
            if (state.cart.find(p => p.id === action.payload)) {
                // console.log("producto agregado")
                const newCart = state.cart.map(p => {
                    if (p.id === action.payload) {
                        p.quantity += 1;
                        p.total = p.price * p.quantity;
                    }
                    return p;
                })
                return {
                    ...state,
                    cart: newCart
                }
            } else {
                product.quantity = 1;
                return {
                    ...state,
                    cart: [...state.cart, product]
                }
            }                 
        case DELETE_PRODUCT_CART:
            if (state.cart.find(p => p.id === action.payload && p.quantity === 1)) {
                const newCart = state.cart.filter(p => p.id !== action.payload)
                return {
                    ...state,
                    cart: newCart
                }
            } else {
                const newCart = state.cart.map(p => {
                    if (p.id === action.payload) {
                        p.quantity -= 1;
                        p.total = p.price * p.quantity;
                    }
                    return p;
                })
                return {
                    ...state,
                    cart: newCart
                }
            }
        case DELETE_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default productsReducer;