import React from 'react';
import {Link} from 'react-router-dom';

const Splash = ({user, logout}) => {
    // if not signed in, display sign in / sign up buttons
    const notloggedin = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    // if signed in, display name and log out button
    const loggedin = () => (
        <div className="header-group">
        <h2 className="header-name">Logged in as: {user.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    )

    return user ? loggedin() : notloggedin();
    // return user ? "logged in" : "logged out";
};

// const Splash = () => (
//     <h1>this is splash.jsx</h1>
// )

export default Splash;