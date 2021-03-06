import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {messageIndex} from '../../actions/message';
import MessageIndex from './message_index';

const mapStateToProps = (state, ownProps) => {
    let channelId = ownProps.match.params.channelId
    let messages = Object.values(state.entities.messages).filter(message => message.channel_id == channelId)
    return{
        messages: messages,
        users: state.entities.users,
        // it doesn't know what users is, it's coming from state
    };
};

const mapDispatchToProps = dispatch => ({
    index: () => dispatch(messageIndex()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);