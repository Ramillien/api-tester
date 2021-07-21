import {applyMiddleware, combineReducers, createStore} from "redux"
import queryReducer from "./queryReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const saveToSessionStorage = (state) => {
    try{
        sessionStorage.setItem('state', JSON.stringify(state))
    } catch (e) {
        console.log(e)
    }
}

const loadFromSessionStorage = () => {
    try {
        const stateStr = sessionStorage.getItem('state')
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const rootReducer = combineReducers({
    query: queryReducer
})

const persistedStore = loadFromSessionStorage()


export const store = createStore(rootReducer, persistedStore, composeWithDevTools(applyMiddleware(thunk)))

window.onbeforeunload = () => {
    saveToSessionStorage(store.getState())
}

