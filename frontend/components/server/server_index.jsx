import React from 'react';
import {Link} from 'react-router-dom';

class ServerIndex extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // react will write this out for you if you don't write anything

    componentDidMount() {
        // componentDidMount is going to wait until everything on the render is done and then componentDidMount is going to run after the render and trigger a rerender of all the components, so the stuff you pass in here will be available for the second rerender
        // you can put in msp stuff here too for ex:
        // this.props.servers
        this.props.index()
    };

    render () {

        let servers = this.props.servers.map(server => (
            // <div key="{server.id}">{server.server_name}</div>
            // <Link key={server.id} to={`/channels/${server.id}`}>{server.server_name.slice(0, 2).toUpperCase()}</Link>
            <Link key={server.id} to={`/channels/${server.id}`}>{server.server_name}</Link>

        ))

        return (
            <div className="server-index">
                {servers}
            </div>
        )
    }

};

export default ServerIndex;