import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import './index.less';
import { mainRouter } from './routes';

render(
    <Router>
        <Switch>
            <Route path='/admin' render={(routerProps) => {
                // 需要做权限认证，登录后才能访问admin下的页面。admin下的页面在App里渲染。
                return <App {...routerProps} />
            }} />
            {mainRouter.map(item => {
                return <Route key={item.pathname} path={item.pathname} component={item.component} />
            })}
            <Redirect exact to='/admin' from='/' />
            <Redirect to='/404' />
        </Switch>
    </Router>,
    document.querySelector('#root')
)