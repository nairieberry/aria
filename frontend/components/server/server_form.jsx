import React from 'react';
import {Link} from 'react-router-dom';



class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentuserid: '',
            currentserverid: '',
            currentchannelid: '',
            // what do I need to pass into the state?
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        }
    }

    handleSubmit(type) {
        e.preventDefault();
            this.props.action(this.state)
    }

    render () {
        return (
            <div className="server-form">
            "I need an index of servers here, as well as a list of all channels inside of a server, all the messages of the currently selected channel, and all the users that have permission to see the currently selected channel, unless it is a direct message between two people, then I don't want those two users visible"
                {/* <div>
                    {servers}
                </div> */}
                {/* <Link to='/' /> */}
            </div>
        )
    }
};

export default ServerForm;