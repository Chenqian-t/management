import React, { Component } from 'react'
import { Spin } from 'antd';

import './loading.less';

export default class Loading extends Component {
    render() {
        return (
            <div className='cq-loading'>
                <Spin size="large" />
            </div>
        )
    }
}
