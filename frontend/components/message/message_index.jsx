import React from 'react';
import {Link} from 'react-router-dom';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.index()
    };

    render () {
        let users = this.props.users
        let messages = this.props.messages.map(message => (
            // <div className="message-index-box" key={message.id}>
            <div key={message.id}>
                {users[message.user_id].username}&nbsp;{message.body}
            </div>
        ))

        return (
            <div className="message-index">
                <div className="message-index-box">
                    {messages.reverse()}
                </div>
            </div>
        )
    }
};

export default MessageIndex;