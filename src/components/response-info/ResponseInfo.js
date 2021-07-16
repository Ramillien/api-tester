import {useSelector} from "react-redux"
import {Card} from 'antd'
import {useState} from "react"
import styles from './response-info.module.css'


function ResponseInfo() {
    const res = useSelector(state => state.query.response)
    const error = useSelector(state => state.query.error)
    const [state, setState] = useState({key: 'body', noTitleKey: 'body',})

    const tabListNoTitle = [
        {
            key: 'body',
            tab: 'Body',
        },
        {
            key: 'headers',
            tab: 'Headers',
        },
        {
            key: 'cookies',
            tab: 'Cookies',
        },
    ]
    const contentListNoTitle = {
        body: <pre className={styles.pre}>{JSON.stringify(res?.data || error?.data?.errors , null, 4) || 'Response'}</pre>,
        headers: <pre className={styles.pre}>{JSON.stringify(res?.headers || error?.headers, null, 4) || 'Headers'}</pre>,
        cookies: <p>cookies content</p>,
    }

    const onTabChange = (key, type) => {
        setState({[type]: key})
    }


    return (
        <Card
            style={{width: '100%'}}
            tabList={tabListNoTitle}
            activeTabKey={state.noTitleKey}
            tabBarExtraContent={<p>Status: <span style={{color: (res?.status ? 'green' : 'red')}}>{res?.status || error?.status}</span></p>}
            onTabChange={key => {
                onTabChange(key, 'noTitleKey')
            }}
        >
            {contentListNoTitle[state.noTitleKey]}
        </Card>
    )
}

export default ResponseInfo