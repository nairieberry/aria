import React from 'react';
import {Route} from 'react-router-dom';

import Splash from '../session/splash_container';
import SignupContainer from '../session/signup_container';

export default () => (
    <div>
        <Route path="/" component={Splash} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);