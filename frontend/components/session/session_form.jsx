import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderHeader = this.renderHeader.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then(() => this.props.history.push("/"));
    }

    // renderHeader() {
    //     if (this.props.buttonText === "Login")
    //         return <div className="">hi</div>
    // }

    render () {
        return (
            <div className="session-form">
                <div className="session-form-box">
                    <div className="session-form-text">
                        {this.props.banner}
                        <br/>
                        {this.props.banner2}
                        {/* {this.renderHeader()} */}
                        <form>
                            <label>Username:
                                <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')} />
                            </label>
                        </form>
                        <form>
                            <label>Password:
                                <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                            </label>
                            <br/>
                            <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                        </form>
                        {this.props.navLink}
                            {/* <img className="background" src="assets/bg.jpg"></img> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm;