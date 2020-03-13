import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminRoutes } from './routes';
import { Frame } from './components';

const mapState = state => {
    return {
        isLogin: state.user.isLogin
    }
}

@connect(mapState)
class App extends Component {
    render() {
        return (
            // 验证是否登录
            this.props.isLogin ?
            <Frame>
                <Switch>
                    {adminRoutes.map(item => {
                        return <Route key={item.pathname} path={item.pathname} render={(routerProps) => {
                            return <item.component {...routerProps} />
                        }} />
                    })}
                    <Redirect exact to={adminRoutes[0].pathname} from='/admin' />
                    <Redirect to='/404' />
                </Switch>
            </Frame>
            : <Redirect to='/login' />
        )
    }
}

export default App