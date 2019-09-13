import React from 'react';
import {Link} from 'react-router-dom';

class ServerShow extends React.Component {

    componentDidMount() {
        // debugger
        this.props.show(this.props.serverId)
    };

    render () {
        const {server} = this.props;
        // looks for a key in this.props called server and assigns its value to a variable called server
        // debugger
        if (!server) return null;
        return (
            <div>
                {server.id}
            </div>
        )
    }

};

export default ServerShow;