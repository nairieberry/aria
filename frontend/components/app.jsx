import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

import Modal from './modal/modal';
import Splash from '../components/splash/splash_container';
import RegisterContainer from './session/register_container';
import LoginContainer from '../components/session/login_container';
import ServerIndexContainer from '../components/server/server_index_container';
import ServerShowContainer from '../components/server/server_show_container';

import ChannelIndexContainer from '../components/channel/channel_index_container';
import ChannelShowContainer from '../components/channel/channel_show_container';
import MessageIndexContainer from '../components/message/message_index_container';
import ChatRoom from '../components/message/chatroom'

export default () => (
    <div>
        <Modal />
        <div className="main-container">
            <ProtectedRoute path="/channels" component={ServerIndexContainer} />
            {/* <ProtectedRoute path="/channels/:serverId" component={ServerShowContainer} /> */}
            <ProtectedRoute path="/channels/:serverId" component={ChannelIndexContainer} />
            {/* <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelShowContainer} /> */}
            <ProtectedRoute path="/channels/:serverId/:channelId" component={ChatRoom} />
            <ProtectedRoute path="/channels/:serverId/:channelId" component={MessageIndexContainer} />
        </div>

        <Switch>
        {/* <AuthRoute exact path="/" component={Splash} /> */}
        {/* <AuthRoute path="/register" component={RegisterContainer} /> */}
        <AuthRoute path="/login" component={LoginContainer} />
        <Route exact path="/" component={Splash} />
        <Route path="/register" component={RegisterContainer} />
        {/* <Route path="/login" component={LoginContainer} /> */}

        </Switch>
    </div>
);

// you need to add your channels and messages routes to here
// when do I put the channel index container