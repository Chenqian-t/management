import { DashBoard, HomePage, Login, NotFound, Setting, Goods } from '../views';

export const mainRoutes = [{
    pathname: '/login',
    component: Login,
}, {
    pathname: '/404',
    component: NotFound,
}, {
    pathname: '/homepage',
    component: HomePage,
}]

export const adminRoutes = [{
    pathname: '/admin/dashboard',
    component: DashBoard,
    title: '数据信息',
    // 确定是否时一级导航栏
    isNav: true,
}, {
    pathname: '/admin/goods',
    component: Goods,
    title: '产品详情',
    isNav: true,
}, {
    pathname: '/admin/setting',
    component: Setting,
    title: '个人设置',
    isNav: true,
}]