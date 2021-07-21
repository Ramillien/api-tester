import {Col, Row} from "antd"
import styles from './query-params.module.css'
import {useDispatch, useSelector} from "react-redux"
import {arrToQueryString, getNewParams, searchQueryParams, urlToArrOfParams} from "../../utils/utils"
import {setUrl} from "../../reducers/queryReducer"
import {useEffect, useState} from "react"


function QueryParams() {
    const dispatch = useDispatch()
    const url = useSelector(state => state.query.url)
    const [params, setParams] = useState(null)

    useEffect(() => {
        if (url) {
            setParams(urlToArrOfParams(url))
        }
    }, [url])

    const changeHandler = (e) => {
        const newParams = getNewParams(e, params)
        const {baseUrl} = searchQueryParams(url)
        dispatch(setUrl(baseUrl + arrToQueryString(newParams)))
    }

    const getList = (data = []) => {
        return data.map((item, id) => (
            <Row key={id}>
                <Col className={styles.table} span={8}>
                    <input className={styles.input}
                           linkto='key'
                           uniqueid={String(id)}
                           onChange={changeHandler}
                           value={item.key || ""}/>
                </Col>
                <Col className={styles.table} span={8}>
                    <input className={styles.input}
                           linkto='value'
                           uniqueid={String(id)}
                           onChange={changeHandler}
                           value={item.value || ""}/>
                </Col>
                <Col className={styles.table} span={8}>
                    <input className={styles.input}
                           linkto='desc'
                           uniqueid={String(id)}
                           onChange={changeHandler}
                           value={item.desc || ""}/>
                </Col>
            </Row>
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
            {params && getList(params)}
        </div>

    )
}

export default QueryParams