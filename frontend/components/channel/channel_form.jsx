import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        // this.props.?.then(this.props.closeModal);
    }

    render() {
        return (
            <div className="channel-form">
                <div>hi</div>
            </div>
        )
    }
}

export default withRouter(SessionForm);