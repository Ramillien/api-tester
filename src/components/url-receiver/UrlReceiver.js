import DropdownMenu from "../dropdown/DropdownMenu"
import {Button, Input} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {setError, setResponse, setUrl} from "../../reducers/queryReducer"
import useFetch from "../../hooks/useFetch"
import {useEffect} from "react"

function UrlReceiver() {
    const dispatch = useDispatch()
    const url = useSelector(state => state.query.url)
    const [{isLoading, response, error}, doFetch] = useFetch(url)

    const changeHandler = (e) => {
        if (e.target.value) {
            dispatch(setUrl(e.target.value))
        }
    }

    const clickHandler = () => {
        if (url) {
            doFetch()
        }
    }

    useEffect(() => {
        dispatch(setResponse(response))
        dispatch(setError(error))
    })

    return (
        <div style={{display: 'flex'}}>
            <DropdownMenu/>
            <Input placeholder="Enter request URL" onChange={e => changeHandler(e)} value={url}/>
            <Button disabled={isLoading} onClick={clickHandler} type='primary'>Send</Button>
        </div>
    )
}

export default UrlReceiver