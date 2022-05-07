
import { ADD_ORDER_ORDERS, ADD_PRODUCT_CART, DELETE_PRODUCT_CART, DELETE_CART } from "../actionsConst";
import { products } from "../../seeds/products";

const initialState = {
    orders: [],
    cart:[]
    }
    // order : JSON.parse(localStorage.getItem('country')) || {}
    // order : JSON.parse(localStorage.getItem('country')) || {}

const getId = () => {
    let initialId = 0;
    return ()=>{
        return initialId++;
    }
}
const newId = getId();
const orderReducer = (state = initialState, action) => {
    console.log('orderReducer', action.payload)
    switch (action.type) {
        case ADD_ORDER_ORDERS:
            console.log('reducer case ADD_ORDER_ORDERS', action.payload)
            action.payload.id = newId();
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
            case ADD_PRODUCT_CART:
                // console.log('ADD_PRODUCT_CART', action.payload);
                let product = products.find(p=>p.id === action.payload);
                if (state.cart.find(p => p.id === action.payload)) {
                    console.log("producto agregado")
                    const newCart = state.cart.map(p => {
                        if (p.id === action.payload) {
                            p.quantity += 1;
                            p.total = p.price * p.quantity;
                        }
                        return p;
                    });
                    return {
                        ...state,
                        cart: newCart
                    }
                } else {
                    product.quantity = 1;
                    return {
                        ...state,
                        cart: [...state.cart, product]
                    };
                };            
            case DELETE_PRODUCT_CART:
                if (state.cart.find(p => p.id === action.payload && p.quantity === 1)) {
                    const newCart = state.cart.filter(p => p.id !== action.payload);
                    return {
                        ...state,
                        cart: newCart
                    };
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

export default orderReducer;