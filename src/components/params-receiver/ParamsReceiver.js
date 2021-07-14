import DropdownMenu from "../dropdown/DropdownMenu";
import {Button, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { setResponse, setUrl} from "../../reducers/queryReducer";
import useFetch from "../../hooks/useFetch";
import {useEffect} from "react";

function ParamsReceiver(props) {
    const dispatch = useDispatch()
    const url = useSelector(state => state.query.url)
    const [{isLoading, response},doFetch] = useFetch(url)

    const changeHandler = (e) => {
        dispatch(setUrl(e.target.value))
    }

    const clickHandler = () => {
        doFetch()
    }

    useEffect(() => {
        if(response){
            dispatch(setResponse(response))
        }

    },[response, dispatch])

    return (
        <div style={{display: 'flex'}}>
            <DropdownMenu />
            <Input placeholder="Enter request URL" onChange={e => changeHandler(e)} value={url} />
            <Button disabled={isLoading} onClick={clickHandler} type='primary'>Send</Button>
        </div>
    )
}

export default ParamsReceiver