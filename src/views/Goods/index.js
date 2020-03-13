import React, { Component } from 'react'
import { Card, Table, Button } from 'antd';

import { getGoodsInfo } from '../../requests';
import ButtonGroup from 'antd/lib/button/button-group';

const displayName = { id: '编号', name: '名称', type: '类型', description: '描述', cost: '成本', price: '价格', sales: '销量' } 
const displayWidth = { id: '10%', name: '8%', type: '8%', description: '30%', cost: '8%', price: '8%', sales: '8%' } 

export default class Goods extends Component {
    constructor() {
        super()
        this.state = {
            columns: [],
            data:[],
        }
    }
    createColumns = (resp) => {
        const columns = Object.keys(resp.list[0]).map(item => {
            return {
                title: displayName[item],
                dataIndex: item,
                key: item,
                width: displayWidth[item]
            }
        })
        columns.push({
            title: '操作',
            render: () => {
                return (
                    <ButtonGroup>
                        <Button>编辑</Button>
                        <Button>下架</Button>
                    </ButtonGroup>
                )
            }
        })
        return columns
    }
    getData = () => {
        getGoodsInfo()
        .then((resp) => {
            this.setState({
                columns: this.createColumns(resp),
                data: resp.list,
            })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <Card title='商品信息' bordered='false' >
                <Table rowKey={record => record.id} columns={this.state.columns} dataSource={this.state.data} />
            </Card>
        )
    }
}
