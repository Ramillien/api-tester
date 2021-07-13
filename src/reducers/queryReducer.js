const SET_PARAMS = 'SET_PARAMS'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = {}


export default function queryReducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAMS':
            return {...state, count: action.payload}
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_PARAMS, payload: count})
export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})