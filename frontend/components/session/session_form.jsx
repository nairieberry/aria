import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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
        // debugger
        // .then(() => this.props.history.push("/"));
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.action({username: "Guest", password: "go_guest_go"})
    }

    // renderHeader() {
    //     if (this.props.buttonText === "Login")
    //         return <div className="">hi</div>
    // }

    render () {
        let login = (this.props.buttonText === "Login") ? (<button onClick={this.demoLogin}>Demo Login</button>) : null;
        return (
            <div className="session-form">
                <div className="session-form-box">
                    <div className="session-form-text">
                        <div className="session-form-title">
                        {this.props.banner}
                        <br/>
                        <div className="session-form-title2">
                        {this.props.banner2}
                        </div>
                        {/* {this.renderHeader()} */}
                        </div>
                        <form>
                            <label className="session-form-username"><div className="session-form-minibox">Username</div>
                                <input className="session-form-username-box" type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')} />
                            </label>
                        </form>
                        <form>
                            <label className="session-form-username"><div className="session-form-minibox">Password</div>
                                <input className="session-form-username-box" type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                            </label>
                            <div className="session-form-button">
                            <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
                            </div>
                        </form>
                        <div className="session-form-navlink">
                            {this.props.navLink}
                        </div>
                        {/* <div className="session-form-demologin"> */}
                        <div className="session-form-demologin">
                            {/* <button onClick={this.demoLogin}>Demo Login</button> */}
                            {login}
                        </div>
                            {/* <img className="background" src="assets/bg.jpg"></img> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm;