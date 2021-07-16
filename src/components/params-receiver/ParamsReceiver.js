import {Card} from 'antd'
import {useState} from "react"
import QueryParams from "../queryparams/QueryParams"


function ParamsReceiver() {
    const [state, setState] = useState({key: 'params', noTitleKey: 'params',})

    const tabListNoTitle = [
        {
            key: 'params',
            tab: 'Params',
        },
        {
            key: 'authorization',
            tab: 'Authorization',
        },
        {
            key: 'headers',
            tab: 'Headers',
        },
        {
            key: 'body',
            tab: 'Body',
        }
    ]
    const contentListNoTitle = {
        params: <QueryParams/>,
        authorization: <p>auth</p>,
        headers: <p>headers</p>,
        body: <p>body</p>,
    }

    const onTabChange = (key, type) => {
        setState({[type]: key})
    }


    return (
        <Card
            style={{width: '100%'}}
            tabList={tabListNoTitle}
            activeTabKey={state.noTitleKey}
            tabBarExtraContent={<p style={{color: '#1890ff'}}>Unimplemented feature</p>}
            onTabChange={key => {
                onTabChange(key, 'noTitleKey')
            }}
        >
            {contentListNoTitle[state.noTitleKey]}
        </Card>
    )
}

export default ParamsReceiver