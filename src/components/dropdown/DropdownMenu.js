import React, {useState} from 'react'
import {Menu, Dropdown, Button, Space} from 'antd'
import {DownOutlined, UserOutlined} from '@ant-design/icons'

function DropdownMenu() {
    const [name, setName] = useState('GET')

    function handleMenuClick(e) {
        if (e.domEvent.target.innerText) {
            setName(e.domEvent.target.innerText)
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
                    {name} <DownOutlined/>
                </Button>
            </Dropdown>
        </Space>
    )
}

export default DropdownMenu