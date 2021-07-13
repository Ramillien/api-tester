import {applyMiddleware, combineReducers, createStore} from "redux";
import queryReducer from "./queryReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    query: queryReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))