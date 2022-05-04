import { combineReducers } from "redux";
import productsReducer from "./products";
import orderReducer from "./orders";
// import countryReducer from "./countryReducer";
// import userReducer from "./userReducer";

/*************************************************************

                    Agregar los reducers

*************************************************************/

const rootReducers = combineReducers({
    productsReducer,
    orderReducer
});

export default rootReducers;