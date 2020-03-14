import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Modal, Avatar } from 'antd';
import { CaretRightOutlined, ExclamationOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminRoutes } from '../../routes';
import logo from './logo.png';
import './frame.less';
import { logoutAction } from '../../actions/user';

const { Header, Content, Sider } = Layout;

const mapState = state => {
    return {
        displayName: state.user.displayName,
        avatar: state.user.avatar,
    }
}

@connect(mapState, { logoutAction })
// 添加路由的属性，跳转页面
@withRouter
class Frame extends Component {
    onDropdownMenuClick = ({ key })=> {
        if(key === "/logout") {
            Modal.confirm({
                cancelText: '取消',
                okText: '确认退出',
                okType: 'danger',
                title: '【退出登录】',
                content: '是否确定要退出登录?',
                icon: <ExclamationOutlined style={{color: 'red' }} />,
                onOk: () => {
                    this.props.logoutAction()
                },
            })
        } else this.props.history.push(key)
    }

    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }

    menu = (
        <Menu onClick={this.onDropdownMenuClick}>
            <Menu.Item key="0">
                未读消息
            </Menu.Item>
            <Menu.Item key="/admin/setting">
                个人设置
            </Menu.Item>
            <Menu.Item key="/logout">
                退出登录
            </Menu.Item>
        </Menu>
    );
    
    render() {
        return (
            <Layout>
                <Header className="cq-header">
                    <div className="cq-logo" >
                        <img src={logo} alt='' />
                    </div>
                    <div>
                        <Dropdown overlay={this.menu} trigger={['click']}>
                            <span style={{textAlign: 'center'}}>
                                <Avatar src={this.props.avatar} />
                                欢迎您，{this.props.displayName}！
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider width={150} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.onMenuClick}
                        >
                            {adminRoutes.map((item) => {
                                if(item.isNav) {
                                    return <Menu.Item key={item.pathname}>{item.title}<CaretRightOutlined /></Menu.Item>
                                } else {
                                    return null
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame