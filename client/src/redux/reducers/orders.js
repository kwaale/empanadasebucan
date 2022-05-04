
import { ADD_ORDER_ORDERS } from "../actionsConst";

const initialState = {
    orders: [],
    orderDetail: {},
    // no funciona order
    order:{
        id: 0,
        client:"",
        address:"",
        observations:"",
        reference:"",
        payment_methods:[],
        delivery:false,
        order_date: new Date(),
        order_status: "Pendiente",
        order_products: [],
        total: 0.00
    }
    // order : JSON.parse(localStorage.getItem('country')) || {}
    // order : JSON.parse(localStorage.getItem('country')) || {}
}

const getId = () => {
    let initialId = 0;
    return ()=>{
        return initialId++;
    }
}
const newId = getId();
const orderReducer = (state = initialState, action) => {
    // console.log('orderReducer', action.payload)
    switch (action.type) {
        case ADD_ORDER_ORDERS:
            action.payload.id = newId();
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        // case ADD_PRODUCT_CART:
        //     return {
        //         ...state,
        //         commerces: state.commerces.concat(action.payload)
        //     }
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
        default:
            return state;
    }
}

export default orderReducer;