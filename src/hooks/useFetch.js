import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = url => {
    // const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        let skipGetResponseAfterDestroy = false


        if (!isLoading) {
            return
        }

        axios(url, options).then(res => {
            if (!skipGetResponseAfterDestroy) {
                setIsLoading(false)
                setError(null)
                setResponse(res)
            }
        }).catch((error) => {
            if (!skipGetResponseAfterDestroy) {
                setIsLoading(false)
                setError(error.response)
                setResponse(null)
            }
        })

        return () => {
            skipGetResponseAfterDestroy = true
        }
    }, [isLoading, options, url])

    return [{isLoading, response, error}, doFetch]
}
export default useFetch
