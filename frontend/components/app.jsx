import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

import Splash from '../components/splash/splash_container';
import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';

export default () => (
    <div>
        <Route path="/" component={Splash} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);