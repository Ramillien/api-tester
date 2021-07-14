import {Col, Row} from "antd";
import styles from './query-params.module.css'
import {useDispatch, useSelector} from "react-redux";
import {objToArray, searchQueryParams} from "../../utils/utils";
import queryString from 'query-string'
import {setQueryParams} from "../../reducers/queryReducer"
import {useEffect} from "react"


function QueryParams(props) {
    const dispatch = useDispatch()
    const url = useSelector(state => state.query.url)
    const params = useSelector(state => state.query.params)

    useEffect(() => {
        const queryParams = searchQueryParams(url)
        const parsed = queryString.parse(queryParams)
        const arr = objToArray(parsed)
        dispatch(setQueryParams(arr))
    },[url, dispatch])

    const changeHandler = (e) => {
        console.log(e)
    }

    const getist = (data = []) => {
        const result = data.map((item, id) => (
            <Row key={id}>
                <Col className={styles.table} span={8}><input className={styles.input} onChange={changeHandler} value={item.key}/></Col>
                <Col className={styles.table} span={8}><input className={styles.input} onChange={changeHandler} value={item.value}/></Col>
                <Col className={styles.table} span={8}><input className={styles.input} onChange={changeHandler} value={item.desc}/></Col>
            </Row>
        ))
        return result
    }

    return (
        <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <p>Query Params</p>
            <Row style={{fontWeight: 'bold'}}>
                <Col className={styles.table} span={8}>KEY</Col>
                <Col className={styles.table} span={8}>VALUE</Col>
                <Col className={styles.table} span={8}>DESCRIPTION</Col>
            </Row>
            {params && getist(params)}
        </div>

    );
}

export default QueryParams;