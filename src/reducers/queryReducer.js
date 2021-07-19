const SET_PARAMS = 'SET_PARAMS'
const SET_URL = 'SET_URL'
const SET_RESPONSE = 'SET_RESPONSE'
const SET_ERROR = 'SET_ERROR'
const SET_METHOD = 'SET_METHOD'

const initialState = {
    url: '',
    options: {
        headers: {
            method: 'GET'
        }
    },
    params: [],
    error: null,
    response: null,
}


export default function queryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PARAMS':
            return {...state, params: [...action.payload]}
        case 'SET_URL':
            return {...state, url: action.payload}
        case 'SET_RESPONSE':
            return {...state, response: action.payload}
        case 'SET_ERROR':
            return {...state, error: action.payload}
        case 'SET_METHOD':
            return {...state, options: {...state.options, headers: {...state.options.headers, method: action.payload}}}
        default:
            return state
    }
}

export const setQueryParams = (params) => ({type: SET_PARAMS, payload: params})
export const setUrl = (url) => ({type: SET_URL, payload: url})
export const setResponse = (response) => ({type: SET_RESPONSE, payload: response})
export const setError = (error) => ({type: SET_ERROR, payload: error})
export const setMethod = (method) => ({type: SET_METHOD, payload: method})
