import {useSelector} from "react-redux";
import {Card} from 'antd';
import {useState} from "react";


function ResponseInfo(props) {
    const res = useSelector(state => state.query.response)
    // const error = useSelector(state => state.query.error)
    const [state, setState] = useState({
        key: 'body',
        noTitleKey: 'body',
    })

    const tabListNoTitle = [
        {
            key: 'body',
            tab: 'body',
        },
        {
            key: 'headers',
            tab: 'headers',
        },
        {
            key: 'cookies',
            tab: 'cookies',
        },
    ]

    const contentListNoTitle = {
        body: <p>{res?.data && Object.keys(res.data).length !== 0 ? JSON.stringify(res.data) : 'Response'}</p>,
        headers: <p>{JSON.stringify(res?.headers)}</p>,
        cookies: <p>cookies content</p>,
    }

    const onTabChange = (key, type) => {
        setState({[type]: key});
    }



    return (
        <Card
            style={{width: '100%'}}
            tabList={tabListNoTitle}
            activeTabKey={state.noTitleKey}
            tabBarExtraContent={res?.status &&
            <p>Status: <span style={{color: (res?.status === 200 ? 'green' : 'red')}}>{res?.status}</span></p>}
            onTabChange={key => {
                onTabChange(key, 'noTitleKey');
            }}
        >
            {contentListNoTitle[state.noTitleKey]}
        </Card>
    )
}

export default ResponseInfo