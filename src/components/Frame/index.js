import React, { Component } from 'react'
import { Layout, Menu, Dropdown} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import { adminRoutes } from '../../routes';
import logo from './logo.png';
import './frame.less';

const { Header, Content, Sider } = Layout;

const menu = (
    <Menu>
        <Menu.Item key="0">
            未读消息
        </Menu.Item>
        <Menu.Item key="1">
            个人设置
        </Menu.Item>
        <Menu.Item key="3">
            推出登录
        </Menu.Item>
    </Menu>
);

// 添加路由的属性，跳转页面
@withRouter
class Frame extends Component {
    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout>
                <Header className="cq-header">
                    <div className="cq-logo" >
                        <img src={logo} alt='' />
                        <div>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <span>
                                    欢迎您，XXX！
                                </span>
                            </Dropdown>
                        </div>
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