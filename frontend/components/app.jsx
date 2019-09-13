import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

import Splash from '../components/splash/splash_container';
import RegisterContainer from './session/register_container';
import LoginContainer from '../components/session/login_container';
import ChannelsContainer from '../components/server/channels_container';

export default () => (
    <div>
        <Switch>
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/register" component={RegisterContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/channels" component={ChannelsContainer} />
        </Switch>
    </div>
);