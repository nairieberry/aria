import React from 'react';
import MessageForm from './messageform';
import {connect} from 'react-redux';
import {messageIndex, receiveCurrentMessage} from '../../actions/message'

const mapStateToProps = (state, ownProps) => {
    return{
        userId: state.session.id,
        messages: Object.values(state.entities.messages),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        messageIndex: () => dispatch(messageIndex()),
        receiveMessage: (message) => dispatch(receiveCurrentMessage(message)),
    })
}

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.bottom = React.createRef();
        // debugger
        // this.props.receiveCurrentMessage = this.props.receiveCurrentMessage.bind(this);
    }

    componentDidMount() {
        // this.props.index
        this.props.messageIndex();
        let receiveMessage = this.props.receiveMessage
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            // add more channels here later
            {
                received: data => {
                    switch (data.type) {
                        case 'message':
                            // debugger
                            this.setState({
                                messages: this.state.messages.concat(data.message)
                            });
                            break;
                        case 'messages':
                            // debugger
                            this.setState({messages: data.messages});
                            break;
                    }    
                },
                speak: function(data) {
                    return this.perform("speak", data);
                },
                load: function() {return this.perform("load")},
                received: function(data) {
                    debugger
                    receiveMessage(data);
                }
            }
        );
    }

    loadChat(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView();
        }
        // debugger
    }

    render() {
        const messageList = this.props.messages.map(message => {
            return (
                <div className="chatroom-message" key={message.id}>
                    {message.body}
                    <div ref={this.bottom} />
                </div>
            );
        });

        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <button className="load-button"
                    onClick={this.loadChat.bind(this)}>
                        Load Chat History
                    </button>
                <div className="chatroom-message-list">{messageList}</div>
                <MessageForm channelId={Number(this.props.match.params.channelId)} userId={Number(this.props.userId)} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);