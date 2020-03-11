import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { adminRouter } from './routes';

export default class App extends Component {
    render() {
        return (
            <div>
                公共部分
                <Switch>
                    {adminRouter.map(item => {
                        return <Route key={item.pathname} path={item.pathname} render={(routerProps) => {
                            return <item.component {...routerProps} />
                        }} />
                    })}
                    <Redirect exact to={adminRouter[0].pathname} from='/admin' />
                    <Redirect to='/404' />
                </Switch>
            </div>
        )
    }
}
