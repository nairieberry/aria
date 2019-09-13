import React from 'react';
import {Link} from 'react-router-dom';

class ServerShow extends React.Component {

    componentDidMount() {
        // debugger
        let serverId = this.props.match.params.serverId
        this.props.showServer(serverId)
    };

    render () {
        // debugger
        return (
            <div>
                {this.props.server.serverId}
            </div>
        )
    }

};

export default ServerShow;