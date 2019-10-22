import React from 'react';
import {Link} from 'react-router-dom';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.index()
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        let channels = this.props.channels.map(channel => (
            <Link key={channel.id} to={`/channels/${channel.server_id}/${channel.id}`}>{channel.channel_name}</Link>
        ))
        // let channels = this.props.channels.map(channel => (
        //     <Link key={channel.id} to={`/channels/${channel.server_id}/${channel.id}`}>{channel.channel_name.slice(0, 1).toUpperCase()}{channel.id}</Link>
        // ))
        // debugger
        return (
            <div className="channel-index-outer">
                <div className="channel-form-text">
                    <b>TEXT CHANNELS</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.openModal}
                </div>
                <div className="channel-index">
                    {/* {this.props.server_name} */}
                    {/* <div onClick={this.props.closeModal}>close modal</div> */}
                    {channels}
                </div>
                <div className="channel-index-2">
                    <button className="channel-index-2-button" onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        )
    }

}

export default ChannelIndex;