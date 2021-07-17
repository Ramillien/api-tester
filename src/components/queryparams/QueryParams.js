import {Col, Row} from "antd"
import styles from './query-params.module.css'
import {useDispatch, useSelector} from "react-redux"
import {arrToQueryString, getNewParams, objToArray, searchQueryParams} from "../../utils/utils"
import queryString from 'query-string'
import {setUrl} from "../../reducers/queryReducer"
import {useEffect, useState} from "react"


function QueryParams() {
    const dispatch = useDispatch()
    const url = useSelector(state => state.query.url)
    const [params, setParams] = useState([])

    useEffect(() => {
        if (url) {
            const queryParams = searchQueryParams(url)
            const parsed = queryString.parse(queryParams.query)
            const arr = objToArray(parsed)
            if(arr.length !== 0){
                setParams(arr)
            }
        }
    }, [url])

    const changeHandler = (e) => {
        const newParams = getNewParams(e, params)
        setParams(newParams)
        const {baseUrl} = searchQueryParams(url)
        dispatch(setUrl(baseUrl+arrToQueryString(newParams)))
    }
    console.log(params)
    const getList = (data = []) => {
        return data.map((item, id) => (
            item.key || item.value ?
                <Row key={id}>
                    <Col className={styles.table} span={8}>
                        <input className={styles.input}
                               linkto='key'
                               uniqueid={String(id)}
                               onChange={changeHandler}
                               value={item?.key || ""}/>
                    </Col>
                    <Col className={styles.table} span={8}>
                        <input className={styles.input}
                               linkto='value'
                               uniqueid={String(id)}
                               onChange={changeHandler}
                               value={item?.value || ""}/>
                    </Col>
                    <Col className={styles.table} span={8}>
                        <input className={styles.input}
                               linkto='desc'
                               uniqueid={String(id)}
                               onChange={changeHandler}
                               value={item?.desc || ""}/>
                    </Col>
                </Row>
                : null
        ))
    }

    return (
        <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <p>Query Params</p>
            <Row style={{fontWeight: 'bold'}}>
                <Col className={styles.table} span={8}>KEY</Col>
                <Col className={styles.table} span={8}>VALUE</Col>
                <Col className={styles.table} span={8}>DESCRIPTION</Col>
            </Row>
            {params.length !== 0 ? getList(params) : null}
        </div>

    )
}

export default QueryParams