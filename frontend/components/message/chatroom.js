import React from 'react';
import MessageForm from './messageform';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.message)
                    });
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        );
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = this.state.messages.map(message => {
            return (
                <div className="chatroom-message" key={message.id}>
                    {message}
                    <div ref={this.bottom} />
                </div>
            );
        });

        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <div className="chatroom-message-list">{messageList}</div>
                <MessageForm />
            </div>
        );
    }
}

export default ChatRoom;