import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.less';
import { mainRoutes } from './routes';
import store from './store';

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/admin' component={App} />
                {/* 需要做权限认证，登录后才能访问admin下的页面。admin下的页面在App里渲染。也可以在App里进行验证。 */}
                {mainRoutes.map(item => {
                    return <Route key={item.pathname} path={item.pathname} component={item.component} />
                })}
                <Redirect exact to='/homepage' from='/' />
                <Redirect to='/404' />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector('#root')
)