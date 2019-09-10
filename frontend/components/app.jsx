import React from 'react';
import SignupContainer from './';
import {Route} from 'react-router-dom';

export default () => {
    <div>
        <Route path="/" component={Splash} />
        <Route exact path="/signup" component={SignupContainer} />
    </div>
};