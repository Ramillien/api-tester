import {Col, Row} from "antd";
import styles from './query-params.module.css'

function QueryParams(props) {
    const data = [
        {name: 'api_key', value: 'XXX'},
        {name: 'lang', value: 'en-EN'},

    ]

    const getist = (data) => {
        const result = data.map((item, id) => (
            <Row key={id}>
                <Col className={styles.table} span={8}>{item.name}</Col>
                <Col className={styles.table} span={8}>{item.value}</Col>
                <Col className={styles.table} span={8}>{item.desc && item.desc}</Col>
            </Row>
        ))
        return result
    }

    return (
        <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <p>Query Params</p>
            <Row>
                <Col className={styles.table} span={8}>KEY</Col>
                <Col className={styles.table} span={8}>VALUE</Col>
                <Col className={styles.table} span={8}>DESCRIPTION</Col>
            </Row>
            {data && getist(data)}
        </div>

    );
}

export default QueryParams;