import React, { Component } from 'react';
import { Form, Input, Button, Select, card, Card } from 'antd';

const { Option } = Select;

export default class Setting extends Component {
    layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    }

    tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }
      
    onFinish = values => {
        console.log('Success:', values);
    }
    
      
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <Card>
                <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item label="职务">
                        <span className="ant-form-text">店长</span>
                    </Form.Item>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="个性留言"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="select"
                        label="性别"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select your country!', },]}
                    >
                        <Select>
                            <Option value="man">男</Option>
                            <Option value="woman">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...this.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
