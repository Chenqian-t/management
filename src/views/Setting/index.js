import React, { Component } from 'react';
import { Form, Button, Card, Avatar } from 'antd';
import { connect } from 'react-redux';

import ChangeUserInfo from './ChangeUserInfo';

const mapState = state => {
    return {
        displayName: state.user.displayName,
        sex: state.user.sex,
        age: state.user.age,
        email: state.user.email,
        phone: state.user.phone,
        role: state.user.role,
        avatar: state.user.avatar,
    }
}

@connect(mapState)
class Setting extends Component {
    constructor() {
        super()
        this.state = {
            isChanging: false,
        }
    }

    layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    }
      
    onChangeUserInfo = () => {
        this.setState({
            isChanging: true,
        })
    }

    render() {
        return (
            <Card title='个人资料' extra={<Button type='primary' onClick={this.onChangeUserInfo}>修改个人资料</Button>}>
                {this.state.isChanging ?
                <ChangeUserInfo layout={this.layout} />
                :
                <Form
                    {...this.layout}
                    name="basic"
                >
                    <Form.Item label="姓名">
                        <span className="ant-form-text">{this.props.displayName}</span>
                    </Form.Item>
                    <Form.Item label="职务">
                        <span className="ant-form-text">{this.props.role}</span>
                    </Form.Item>
                    <Form.Item label="联系方式">
                        <span className="ant-form-text">{this.props.phone}</span>
                    </Form.Item>
                    <Form.Item label="邮箱">
                        <span className="ant-form-text">{this.props.email}</span>
                    </Form.Item>
                    <Form.Item label="性别">
                        <span className="ant-form-text">{this.props.sex}</span>
                    </Form.Item>
                    <Form.Item label="年龄">
                        <span className="ant-form-text">{this.props.age}</span>
                    </Form.Item>
                    <Form.Item label="头像">
                        <span className="ant-form-text"><Avatar src={this.props.avatar} /></span>
                    </Form.Item>
                </Form>}
            </Card>
        )
    }
}

export default Setting