import React, { Component } from 'react';
import { Button, Carousel, Row, Col, Menu, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import './homepage.less';
import { bannerImg1, bannerImg2, bannerImg3, bannerImg4, itemImage1, itemImage2, itemImage3, itemImage4, QR_card } from './images';

const { Header, Footer, Content } = Layout;

@withRouter
class HomePage extends Component {
    menu = (
        <Menu style={{width: '200px', }} >
            <Menu.Item key="0" style={{textAlign: 'center'}}>
                联系电话：XXX-XXXXXXXX
            </Menu.Item>
            <Menu.Item key="1" style={{textAlign: 'center'}}>
                关注公众号,了解更多动态<br />
                <img src={QR_card} alt='' style={{width: '150px', }} />
            </Menu.Item>
        </Menu>
    )
    onClick = () => {
        this.props.history.push('/admin')
    }
    render() {
        return (
            <div className='cq-homepage'>
                <Layout>
                    <Header style={{backgroundColor: 'rgb(255, 255, 255)', borderBottom: '1px solid gray', padding: '0'}}>
                        <div className='homepage-header'>
                            <div className='header-logo'>
                                logo
                            </div>
                            <ul className='header-nav'>
                                <li>全 部</li>
                                <li>蛋 糕</li>
                                <li>饮 品</li>
                                <li>小 吃</li>
                                <li>团 购</li>
                                <li>关于我们</li>
                            </ul>
                            <div className='hearder-button'>
                                <Button onClick={this.onClick}>
                                    登录
                                </Button>
                                <Dropdown overlay={this.menu} trigger={['hover']}>
                                    <Button style={{borderRadius: 'inherit'}}>
                                        联系我们
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Content style={{backgroundColor: 'white'}}>
                        <div>
                            <Carousel autoplay >
                                <div className='banner-img'>
                                    <img src={bannerImg1} alt= '' />
                                </div>
                                <div className='banner-img'>
                                    <img src={bannerImg2} alt= '' />
                                </div>
                                <div className='banner-img'>
                                    <img src={bannerImg3} alt= '' />
                                </div>
                                <div className='banner-img'>
                                    <img src={bannerImg4} alt= '' />
                                </div>
                            </Carousel>
                        </div>
                        <div className='goodsType'>
                            <div  className='goodsItem'>
                                <img src={itemImage1} alt= '' />
                                <h3>AFTERNOON TEA 下午茶</h3>
                                <h5>“一杯咖啡，一份甜点，一抹偷不走的时光”。</h5>
                            </div>
                            <div  className='goodsItem'>
                                <img src={itemImage2} alt= '' />
                                <h3>CAKE 蛋糕</h3>
                                <h5>“只有国王才有资格拥有的，享受众人给予的祝福”。</h5>
                            </div>
                            <div  className='goodsItem'>
                                <img src={itemImage3} alt= '' />
                                <h3>SNACK 小吃</h3>
                                <h5>“好吃的，都在经典加精致”。</h5>
                            </div>
                            <div  className='goodsItem'>
                                <img src={itemImage4} alt= '' />
                                <h3>SOUVENIR 手信</h3>
                                <h5>“不在于贵，一情意，一真诚”。</h5>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{backgroundColor: '#3D2D23', color: 'white', padding: '0 100px'} }>
                        <Row className='cq-footer1'>
                            <Col span={4}>品牌动态</Col>
                            <Col span={4}>生产经营资质</Col>
                            <Col span={4}>企业合作</Col>
                            <Col span={4}>京东商城</Col>
                            <Col span={4}>帮助服务</Col>
                            <Col span={4}>联系我们</Col>
                        </Row>
                        <Row className='cq-footer2'>
                            <Col span={8}>XXXX有限公司</Col>
                            <Col span={6}>XICP备00000000号-0</Col>
                            <Col span={10}>公司地址：XXXXXXXXXXXXXXXXXXXXXX</Col>
                        </Row>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default HomePage