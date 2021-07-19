import {Menu, Dropdown, Button, Space} from 'antd'
import {DownOutlined, UserOutlined} from '@ant-design/icons'
import {setMethod} from "../../reducers/queryReducer"
import {useDispatch, useSelector} from "react-redux"

function DropdownMenu() {
    const method = useSelector(state => state.query.options.headers.method)
    const dispatch = useDispatch()

    function handleMenuClick(e) {
        if (e.domEvent.target.innerText) {
            dispatch(setMethod(e.domEvent.target.innerText))
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
                GET
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined/>}>
                POST
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined/>}>
                DELETE
            </Menu.Item>
        </Menu>
    )

    return (
        <Space wrap>
            <Dropdown overlay={menu}>
                <Button>
                    {method} <DownOutlined/>
                </Button>
            </Dropdown>
        </Space>
    )
}

export default DropdownMenu