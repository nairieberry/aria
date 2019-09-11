import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

import Splash from '../components/splash/splash_container';
import RegisterContainer from './session/register_container';
import LoginContainer from '../components/session/login_container';

export default () => (
    <div>
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/register" component={RegisterContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);