import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = url => {
    // const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    // const [token] = useLocalStorage('token')

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        let skipGetResponseAfterDestroy = false
        const requestOptions = {
            ...options,
            // ...{
            //     headers: {
            //         authorization: token ? `Token ${token}` : ''
            //     }
            // }
        }

        if (!isLoading) {
            return
        }

        axios(url, requestOptions).then(res => {
            if (!skipGetResponseAfterDestroy) {
                setIsLoading(false)
                setError(null)
                setResponse(res)
            }
        }).catch(error => {
            if (!skipGetResponseAfterDestroy) {
                setIsLoading(false)
                setResponse(null)
                setError(error)
            }
        })

        return () => {
            skipGetResponseAfterDestroy = true
        }
    }, [isLoading, options, url])

    return [{isLoading, response, error}, doFetch]
}
export default useFetch
