// import DashBoard from './DashBoard';
// import HomePage from './HomePage';
// import Login from './Login';
// import NotFound from './NotFound';
// import Setting from './Setting';
// import Goods from './Goods';

// 路由的懒加载
import Loadable from 'react-loadable';

import { Loading } from '../components';

const DashBoard = Loadable({
    loader: () => import('./DashBoard'),
    loading: Loading,
})

const HomePage = Loadable({
    loader: () => import('./HomePage'),
    loading: Loading,
})

const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading,
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
})

const Setting = Loadable({
    loader: () => import('./Setting'),
    loading: Loading,
})

const Goods = Loadable({
    loader: () => import('./Goods'),
    loading: Loading,
})

export { DashBoard, HomePage, Login, NotFound, Setting, Goods }