import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // what do I need to pass into the state?
            // only if you need to keep track of local state, like for a form when creating a new user, or creating a new server, channel, or message
            // you don't need one for index
            // haha yeah you do actually cuz ur making a modal now -.-
            server_name: '',
            description: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        }
    }

    // handleSubmit(type) {
    //     e.preventDefault();
    //         this.props.action(this.state)
    // }

    handleSubmit(e) {
        e.preventDefault();
        const server = Object.assign({}, this.state);
        this.props.newServer(server).then(this.props.closeModal());
    }

    render () {
        return (
            <div className="server-form">
                <div>hi</div>
                <form>
                    <label className="server-form-field"><div className="server-form-minibox">server Name</div>
                        <input className="server-form-field-box" type="text"
                            value={this.state.server_name}
                            onChange={this.handleInput('server_name')} />
                    </label>
                </form>
                <form>
                    <label className="server-form-field"><div className="server-form-minibox">Description</div>
                        <input className="server-form-field-box" type="text"
                            value={this.state.description}
                            onChange={this.handleInput('description')} />
                    </label>
                    <div className="server-form-submit">
                        {/* <button onClick={this.handleSubmit}>{this.props.buttonText}</button> */}
                        <button onClick={this.handleSubmit}>Create new server</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(ServerForm);