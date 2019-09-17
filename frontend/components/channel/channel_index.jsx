import React from 'react';
import {Link} from 'react-router-dom';

class ChannelIndex extends React.Component {
    componentDidMount() {
        this.props.index()
    };

    render () {
        let channels = this.props.channels.map(channel => (
            <Link key={channel.id} to={`/channels/${channel.server_id}/${channel.id}`}>{channel.channel_name}</Link>
        ))
        // let channels = this.props.channels.map(channel => (
        //     <Link key={channel.id} to={`/channels/${channel.server_id}/${channel.id}`}>{channel.channel_name.slice(0, 1).toUpperCase()}{channel.id}</Link>
        // ))
        // debugger
        return (

            <div className="channel-index">
                {channels}
            </div>
        )
    }

}

export default ChannelIndex;