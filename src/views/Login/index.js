import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './login.less';
import { loginAction } from '../../actions/user';

const mapState = state => {
    return {
        isLogin: state.user.isLogin,
        isLoading: state.user.isLoading,
    }
}

@connect(mapState, { loginAction })
@withRouter
class Login extends Component {
    onFinish = values => {
        this.props.loginAction(values)
    }
    render() {
        return (
            this.props.isLogin ?
            <Redirect to='/admin' /> :
            <div className='cq-login'>
                <Card
                    className='cq-card'
                    title='西西甜点'
                    extra={<Button onClick={() => this.props.history.push('/homepage')}>首页</Button>}
                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{
                                required: true,
                                message: '请输入用户名!',
                            },]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{
                                required: true,
                                message: '请输入密码!',
                            },]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            忘记密码
                        </Form.Item>
                        <Form.Item className='login-button'>
                            <Button
                                loading={this.props.isLoading}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                登录
                            </Button>
                            <Button style={{margin: '0 0 0 20px', }}>
                                现在注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login