import React from 'react';
import {Link} from 'react-router-dom';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.index()
    };

    render () {
        let messages = this.props.messages.map(message => (
            <div key={message.id}>
                {message.body}
            </div>
        ))

        return (
            <div className="message-index">
                <div className="message-index-box">>
                    {messages}
                </div>
            </div>
        )
    }
};

export default MessageIndex;