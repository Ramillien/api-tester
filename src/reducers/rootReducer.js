import {applyMiddleware, combineReducers, createStore} from "redux"
import queryReducer from "./queryReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const saveToLocalstorage = (state) => {
    try{
        localStorage.setItem('state', JSON.stringify(state))
    } catch (e) {
        console.log(e)
    }
}

const loadFromLocalstorage = () => {
    try {
        const stateStr = localStorage.getItem('state')
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const rootReducer = combineReducers({
    query: queryReducer
})

const persistedStore = loadFromLocalstorage()


export const store = createStore(rootReducer, persistedStore, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    saveToLocalstorage(store.getState())
})

