
import {
    ADD_ORDER_ORDERS,
    ADD_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    DELETE_CART,
    GENERATE_ORDER,
    ACTIVE_DESACTIVE
} from "../actionsConst";
import { payment_methods } from './../../seeds';
import { detectaCombos } from "../../utils/detectaCombos";

const initialState = {
    orders: [],
    order: {
        id: null,
        name: "",
        address: "Pick Up",
        order_date: "",
        observation: "",
        delivery: false,
        order_status: "Pendiente",
        reference: "",
        cart: [],
        payment_methods: [],
        combos: [],
        total: 0.00,
    },
    payment_methods: payment_methods,
    total_cart: 0.00,
    cart: [],
    delivery:{
        name: "delivery",
        price: 0.00,
        active: false,
        address:""
    }
    // order : JSON.parse(localStorage.getItem('country')) || {}
    // order : JSON.parse(localStorage.getItem('country')) || {}
}
//Funcion generadora del ID
const getId = () => {
    let initialId = 0;
    return () => {
        return initialId++;
    }
}
const newId = getId();

const orderReducer = (state = initialState, action) => {
    console.log('orderReducer', action.payload)
    switch (action.type) {
        case ADD_ORDER_ORDERS:
            // console.log('reducer case ADD_ORDER_ORDERS', action.payload)
            // console.log('ADD_ORDER_ORDERS', action.payload);
            return {
                ...state,
                orders: [...state.orders, state.order],
            }
        case GENERATE_ORDER:
            // console.log('reducer case ADD_ORDER_ORDERS', action.payload)
            // console.log('ADD_ORDER_ORDERS', action.payload);
            // console.log('state.order.total)',state.order.total);
            return {
                ...state,
                order: detectaCombos({
                    ...state.order,
                    id: newId(),
                    order_date: new Date().toLocaleDateString(),
                    name: action.payload.name,
                    delivery: state.delivery.active ? {...state.delivery, address: action.payload.address} : false,
                    payment_methods: state.payment_methods,
                    address: action.payload.address,
                    observation: action.payload.observation || "No",
                    reference: action.payload.reference || "No",
                    order_status: state.order.order_status,
                    total: state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                }),
            }
        case ADD_PRODUCT_CART:
            // console.log('ADD_PRODUCT_CART', action.payload);
            if (state.order.cart.find(p => p.id === action.payload.id)) {
                // console.log("IF action.payload", action.payload)
                return {
                    ...state,
                    order: {
                        cart: state.order.cart.map(p => {
                            if (p.id === action.payload.id) p.quantity++;
                            return p;
                        }),
                        total: state.order.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                    }
                }
            } else {
                // console.log("ELSE action.payload", action.payload)
                action.payload.quantity = 1;
                return {
                    ...state,
                    order: {
                        cart: [...state.order.cart, action.payload],
                        total: state.order.cart.reduce((total, p) => total + p.price * p.quantity, 0) + action.payload.price
                    }
                };
            };
        case DELETE_PRODUCT_CART:
            // console.log("DELETE_PRODUCT_CART", action.payload)
            const { price, quantity } = state.order.cart.find(p => p.id === action.payload)
            // console.log("price, quantity", price, quantity);
            if (price && quantity === 1) {
                // console.log("IF price && quantity === 1", price, quantity);
                return {
                    ...state,
                    order: {
                        cart: state.order.cart.filter(p => p.id !== action.payload),
                        total: state.order.cart.reduce((total, p) => total + p.price * p.quantity, 0) - price
                    }
                }
            } else {
                return {
                    ...state,
                    order: {
                        cart: state.order.cart.map(p => {
                            if (p.id === action.payload) {
                                p.quantity -= 1;
                            }
                            return p;
                        }),
                        total: state.order.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                    }
                }
            }
        case DELETE_CART:
            return {
                ...state,
                order: initialState.order
            }

            case ACTIVE_DESACTIVE:
                console.log("reducer", action.payload)
                if(action.payload === "delivery"){
                    return {
                        ...state,
                        delivery: {
                            ...state.delivery,
                            active: state.delivery.active ? false : true
                        }
                    }
                }else{
                    return {
                        ...state,
                        payment_methods: state.payment_methods.map(p => {
                            if (p.name === action.payload && p.active){
                                p.active = false;
                            }else if(p.name === action.payload && !p.active){
                                p.active = true;
                            }
                            return p;
                        })
                    }
            }    
              // case ACTIVE_DELIVERY:
            //     return {
            //         ...state,
            //         order: initialState.order
            //     }    
        default:
            return state;
    }
}

export default orderReducer;
