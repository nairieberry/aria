import React from 'react';
import {Link} from 'react-router-dom';

class ChannelShow extends React.Component {
    componentDidMount() {
        this.props.show(this.props.channelId)
    };

    render () {
        const {channel} = this.props;
        if (!channel) return null;
        return (
            <div>
                {channel.channel_name}
            </div>
        )
    }

};

export default ChannelShow;