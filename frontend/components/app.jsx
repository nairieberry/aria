import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

import Splash from '../components/splash/splash_container';
import RegisterContainer from './session/register_container';
import LoginContainer from '../components/session/login_container';
import ServerIndexContainer from '../components/server/server_index_container';

import ServerShowContainer from '../components/server/server_show_container';

export default () => (
    <div>
        <Route path="/channels" component={ServerIndexContainer} />
        <Switch>
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/register" component={RegisterContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/channels/:serverId" component={ServerShowContainer} />
        </Switch>
    </div>
);

// you need to add your channels and messages routes to here