import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {openModal, closeModal} from '../../actions/modal_actions';
import {channelIndex, newChannel} from '../../actions/channel';
import ChannelIndex from './channel_index';

const mapStateToProps = (state, ownProps) => {
    let serverId = ownProps.match.params.serverId
    let channels = Object.values(state.entities.channels).filter(channel => channel.server_id == serverId)
    // debugger
    return{
        channels: channels,
        // servers: servers,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    index: () => dispatch(channelIndex()),
    newChannel: (channel) => dispatch(newChannel(channel)),
    openModal: (
        <button className="channel-form-button" onClick={() => dispatch(openModal('channel', ownProps.match.params.serverId))}>
            TEXT CHANNELS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`+`}</span>
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);