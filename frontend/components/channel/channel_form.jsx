import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_name: '',
            description: '',
            server_id: this.props.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        // debugger
        this.props.newChannel(channel).then(this.props.closeModal());
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        return (
            <div className="channel-form">
                <div className="channel-form-banner">CREATE TEXT CHANNEL</div>
                <div className="channel-form-banner2">in Text Channels</div>
                <form>
                    <label className="channel-form-field"><div className="channel-form-minibox">Channel Name</div>
                        <input className="channel-form-field-box" type="text"
                            value={this.state.channel_name}
                            onChange={this.handleInput('channel_name')} />
                    </label>
                </form>
                <form>
                    <label className="channel-form-field"><div className="channel-form-minibox">Description</div>
                        <input className="channel-form-field-box" type="text"
                            value={this.state.description}
                            onChange={this.handleInput('description')} />
                    </label>
                    <div className="channel-form-submit">
                        {/* <button onClick={this.handleSubmit}>{this.props.buttonText}</button> */}
                        <button onClick={this.handleSubmit}>Create Channel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);