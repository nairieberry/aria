import React from 'react';
import {Route} from 'react-router-dom';

import Splash from '../components/splash/splash_container';
import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';

export default () => (
    <div>
        <Route path="/" component={Splash} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
    </div>
);