import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { adminRoutes } from './routes';
import { Frame } from './components';

export default class App extends Component {
    render() {
        return (
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
        )
    }
}
