import DropdownMenu from "../dropdown/DropdownMenu";
import {Button, Input} from "antd";
import {useState} from "react";
import queryString from 'query-string';
import {searchQueryParams} from "../../utils/utils";

function ParamsReceiver(props) {
    const [value, setValue] = useState('')



    console.log('searchQuery', searchQueryParams(value))
    const parsed = queryString.parse(searchQueryParams(value));
    console.log('parsed',parsed);


    return (
        <div style={{display: 'flex'}}>
            <DropdownMenu />
            <Input placeholder="Enter request URL" onChange={e => setValue(e.target.value)} value={value} />
            <Button type='primary'>Send</Button>
        </div>
    )
}

export default ParamsReceiver