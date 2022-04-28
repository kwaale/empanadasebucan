import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

//Dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Store
const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;