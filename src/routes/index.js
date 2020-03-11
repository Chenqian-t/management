import { DashBoard, HomePage, Login, NotFound, Setting, Goods } from '../views';

export const mainRouter = [{
    pathname: '/login',
    component: Login,
}, {
    pathname: '/404',
    component: NotFound,
}, {
    pathname: '/homepage',
    component: HomePage,
}]

export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: DashBoard,
}, {
    pathname: '/admin/goods',
    component: Goods,
}, {
    pathname: '/admin/setting',
    component: Setting,
}]