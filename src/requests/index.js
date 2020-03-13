import axios from 'axios';
import { message } from 'antd';

const ajax = axios.create({
    baseURL: 'http://rap2.taobao.org:38080/app/mock/246919'
})

ajax.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
        // authToken: window.localStorage.getItem('authToken')
        authToken: 'token'
    })
    return config
})

ajax.interceptors.response.use((resp) => {
    if (resp.data.code === 200) {
        return resp.data.data
    } else {
        message.error(resp.data.errMsg)
    }
})

// 获取商品信息
export const getGoodsInfo = () => {
    return ajax.post('/api/v1/goodsInfo')
}

// 登录
export const login = (userInfo) => {
    return ajax.post('/api/v1/users', userInfo)
}