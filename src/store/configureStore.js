import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import invoicesReducer from "../reducers/invoices";

// Keep REDUX DEVTOOLS functionalities if it exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {

    const store = createStore(
        combineReducers({
            invoices: invoicesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};