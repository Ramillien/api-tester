import React from 'react';
import DropdownMenu from "./dropdown/DropdownMenu";
import {Button, Input} from "antd";

function ParamsReceiver(props) {
    return (
        <div style={{display: 'flex'}}>
            <DropdownMenu />
            <Input placeholder="Enter request URL" />
            <Button type='primary'>Send</Button>
        </div>
    );
}

export default ParamsReceiver;