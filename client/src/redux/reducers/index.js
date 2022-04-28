import { combineReducers } from "redux";
import productsReducer from "./products";
// import countryReducer from "./countryReducer";
// import userReducer from "./userReducer";

/*************************************************************

                    Agregar los reducers

*************************************************************/

const rootReducers = combineReducers({
    products: productsReducer,
});

export default rootReducers;