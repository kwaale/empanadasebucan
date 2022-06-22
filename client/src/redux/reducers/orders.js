
import {
    ADD_ORDER_ORDERS,
    ADD_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    DELETE_CART,
    GENERATE_ORDER,
    ACTIVE_DESACTIVE,
    COMBOS_DISCONT,
} from "../actionsConst";
import { payment_methods, zonas } from './../../seeds';
// import { pedido1 } from './../../seeds/pedidosPrueba';
import { combos } from '../../seeds/index';

const initialState = {
    orders: [],
    order: {
        id: null,
        name: "",
        address: "Pick Up",
        order_date: "",
        observation: "",
        delivery: {},
        order_status: "Pendiente",
        reference: "",
        cart: [],
        payment_methods: [],
        combos: combos,
        descuento: 0,
        total: 0.00,
    },
    payment_methods: payment_methods,
    total_cart: 0.00,
    cart: [],
    // cart: pedido1,
    delivery: {
        active: false,
        zona: {},
        address: "",
    },
    zonas_delivery: zonas
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
    // console.log('orderReducer', action.payload);
    switch (action.type) {
        case ADD_ORDER_ORDERS:
            // console.log('reducer case ADD_ORDER_ORDERS', action.payload)
            // console.log('ADD_ORDER_ORDERS', action.payload);
            return {
                ...state,
                orders: [...state.orders, state.order],
            }
        case GENERATE_ORDER:
            // Si hay address, se agrega la orden asi.
            if (action.payload.address !== "") {
                // console.log("IF action.payload", action.payload);
                return {
                    ...state,
                    order: {
                        ...state.order,
                        id: newId(),
                        order_date: new Date().toLocaleDateString(),
                        name: action.payload.name,
                        delivery: {
                            ...state.delivery,
                            zona: state.zonas_delivery.find(zona => zona.active),
                            address: action.payload.address,
                            active: true
                        },
                        payment_methods: state.payment_methods.filter(payment_method => payment_method.active),
                        address: action.payload.address,
                        observation: action.payload.observation || null,
                        reference: action.payload.reference || null,
                        cart: state.cart,
                        // order_status: state.order.order_status,
                        total: state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                    },
                }
                // Si no hay address, se agrega la orden asi.
            } else {
                console.log("Else action.payload", action.payload);
                return {
                    ...state,
                    order: {
                        ...state.order,
                        id: newId(),
                        order_date: new Date().toLocaleDateString(),
                        name: action.payload.name,
                        payment_methods: state.payment_methods.filter(payment_method => payment_method.active),
                        observation: action.payload.observation || null,
                        reference: action.payload.reference || null,
                        cart: state.cart,
                        delivery: state.delivery,
                        // order_status: state.order.order_status,
                        total: state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                    },
                }
            }
        case ADD_PRODUCT_CART:
            // console.log('ADD_PRODUCT_CART', action.payload);
            if (state.cart.find(p => p.id === action.payload.id)) {
                // console.log("IF action.payload", action.payload)
                return {
                    ...state,
                    cart: state.cart.map(p => {
                        if (p.id === action.payload.id) p.quantity++;
                        return p;
                    }),
                    total_cart: state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                }
            } else {
                // console.log("ELSE action.payload", action.payload)
                action.payload.quantity = 1;
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    total_cart: state.cart.reduce((total, p) => total + p.price * p.quantity, 0) + action.payload.price
                };
            };
        case DELETE_PRODUCT_CART:
            // console.log("DELETE_PRODUCT_CART", action.payload)
            const { price, quantity } = state.cart.find(p => p.id === action.payload)
            // console.log("price, quantity", price, quantity);
            if (price && quantity === 1) {
                // console.log("IF price && quantity === 1", price, quantity);
                return {
                    ...state,
                    cart: state.cart.filter(p => p.id !== action.payload),
                    total_cart: state.cart.reduce((total, p) => total + p.price * p.quantity, 0) - price
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.map(p => {
                        if (p.id === action.payload) {
                            p.quantity -= 1;
                        }
                        return p;
                    }),
                    total_cart: state.cart.reduce((total, p) => total + p.price * p.quantity, 0)
                }
            }
        case DELETE_CART:
            // console.log("DELETE_CART", zonas)
            return {
                ...state,
                order: {
                    id: null,
                    name: "",
                    address: "Pick Up",
                    order_date: "",
                    observation: "",
                    delivery: initialState.delivery,
                    order_status: "Pendiente",
                    reference: "",
                    cart: [],
                    payment_methods: [],
                    combos: [],
                    descuento: 0,
                    total: 0.00,
                },
                payment_methods: payment_methods.map(p => {
                    return {
                        ...p,
                        active: false
                    }
                }),
                total_cart: 0.00,
                cart: [],
                delivery: initialState.delivery,
                zonas_delivery: zonas.map(p => {
                    return {
                        ...p,
                        active: false
                    }
                })
            }

        case ACTIVE_DESACTIVE:
            // console.log("reducer", action.payload)
            // activa los delivery
            if (
                action.payload === "Zona 1" ||
                action.payload === "Zona 2" ||
                action.payload === "Zona 3" ||
                action.payload === "Zona 4"
            ) {
                // console.log("active zone", action.payload);
                return {
                    ...state,
                    zonas_delivery: state.zonas_delivery.map(p => {
                        if (p.name === action.payload) {
                            p.active ? p.active = false : p.active = true;
                        }
                        return p
                    })
                }
            } else {
                // activa metodos de pago
                return {
                    ...state,
                    payment_methods: state.payment_methods.map(p => {
                        if (p.name === action.payload && p.active) {
                            p.active = false;
                        } else if (p.name === action.payload && !p.active) {
                            p.active = true;
                        }
                        return p;
                    })
                }
            }
        case COMBOS_DISCONT:
            // console.log("action.payload", action.payload);
            // Si existe ya el combo se agrego y hay que agregar mas
            if (action.payload.simbol === "+") {
                return {
                    ...state,
                    order: {
                        ...state.order,
                        combos: state.order.combos.map(combo => {
                            if (combo.id === action.payload.id) combo.quantity++;
                            return combo;
                        }),
                        descuento: state.order.combos.reduce((total, p) => total + p.discount * p.quantity, 0)
                    }
                }
            } else {
                return {
                    ...state,
                    order: {
                        ...state.order,
                        combos: state.order.combos.map(combo => {
                            if (combo.id === action.payload.id && combo.quantity >= 1) combo.quantity--;
                            return combo;
                        }),
                        descuento: state.order.combos.reduce((total, p) => total + p.discount * p.quantity, 0)
                    }
                }
            }
            // case SWITCH_DISCONT:
        //     return {
        //         ...state,
        //         order: initialState.order
        //     }  
        default:
            return state;
    }
}

export default orderReducer;