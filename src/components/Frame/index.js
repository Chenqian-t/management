import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import { adminRoutes } from '../../routes';

const { Header, Content, Sider } = Layout;

// 添加路由的属性，跳转页面
@withRouter
class Frame extends Component {
    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" ></div>
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