import React from 'react';
import {Link} from 'react-router-dom';

class ChannelIndex extends React.Component {
    componentDidMount() {
        this.props.index()
    };

    render () {
        let channels = this.props.channels.map(channel => (
            <Link key={channel.id} to={`channels/${server.id}/${channel.id}`}>{channel.channel_name}</Link>
        ))

        return (
            <div className="channel-index">
                {channels}
            </div>
        )
    }

}

export default ChannelIndex;