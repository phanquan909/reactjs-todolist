import React, { Component } from 'react';
import { CloseOutlined } from '@ant-design/icons';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // textinput: '',
        }
    }

    render() {
        const { todos } = this.props;
        return todos?.map((item) => (
            <ul className='todo_list'>
                <li>
                    <div className='view'>
                        <input className='toggle' defaultChecked={item.status} type='checkbox'></input>
                        <label>{item?.name}</label>
                        <button className='destroy'><CloseOutlined /></button>
                    </div>
                </li>
            </ul>
        ))
    }

}
export default Content;