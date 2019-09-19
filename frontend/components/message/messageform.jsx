import React from 'react';
import {Link} from 'react-router-dom';
import {serverIndex} from '../../actions/message'

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {body: ""};
        // this.state.handleSubmit
    }

    update(field) {
        return e =>
        this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        App.cable.subscriptions.subscriptions[0].speak({body: this.state.body, channel_id: this.props.channelId, user_id: this.props.userId});
        this.setState({body: ""});
    }

    render() {
        // debugger
        return (
            <div className="messageform">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className="messageform-submit"
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Message"
                    />
                    <input type="submit" value="" />
                </form>
            </div>
        );
    }
}

export default MessageForm;