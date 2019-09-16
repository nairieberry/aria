import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {channelIndex} from '../../actions/channel';
import ChannelIndex from './channel_index;';

const mapStateToProps = (state) => {
    let channels = Object.values(state.entities.channels)
    return{
        channels: channels,
    };
};

const mapDispatchToProps = dispatch => ({
    index: () => dispatch(channelIndex()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);