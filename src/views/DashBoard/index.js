import React, { Component,createRef } from 'react'
import { Card, Row, Col } from 'antd';
import echarts from 'echarts';

import './dashboard.less';
import { getGoodsInfo } from '../../requests';

export default class DashBoard extends Component {
    constructor() {
        super()
        this.goodsSales = createRef()
        this.state = {
            totalGoods: 0,
            totalSales: 0,
            bestSalesGoods: '',
        }
    }
    initGoodsChart = () => {
        // 使用ref获取dom元素
        this.goodsChart = echarts.init(this.goodsSales.current)
        getGoodsInfo()
        .then((resp) => {
            const best = Math.max.apply(null, resp.list.map(item => {
                return item.sales
            }))
            const bestName = resp.list.map(item => {
                if(item.sales === best) {
                    return item.name
                } else {
                    return null
                }
            })
            const option = {
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: resp.list.map(item => {
                        return item.name
                    }),
                    axisLabel: {
                        // x轴显示不全时，强制全部显示
                        interval: 0,
                    },
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: resp.list.map(item => {
                        return item.sales
                    })
                }]
            };
            this.goodsChart.setOption(option);
            this.setState({
                totalGoods: resp.list.length,
                totalSales: resp.list.map(item => {
                    return item.sales
                }).reduce((x, y) => {
                    return x+y
                }),
                bestSalesGoods: bestName,
            })
        })
    }
    componentDidMount() {
        this.initGoodsChart()
    }
    render() {
        return (
            <>
                <Card title="概览" bordered={false} >
                    {/* 动态布局 */}
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}>
                            <div className="cq-gutter-box" >
                                商品总数:{this.state.totalGoods}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="cq-gutter-box" >
                                销售总量:{this.state.totalSales}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="cq-gutter-box" >
                                销量最佳单品:{this.state.bestSalesGoods}
                            </div>
                        </Col>
                    </Row>
                </Card>
                <Card title="走势图" bordered={false} >
                    <div ref={this.goodsSales} style={{height: '300px' }} ></div>
                </Card>
            </>
        )
    }
}
