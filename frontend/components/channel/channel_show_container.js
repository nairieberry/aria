import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {showChannel} from '../../actions/channel';
import ChannelShow from './channel_show';

const mapStateToProps = (state, ownProps) => {
    let channelId = ownProps.match.params.channelId;
    return ({
        channel: state.entities.channels[channelId],
        channelId,
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        show: (id) => dispatch(showChannel(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);