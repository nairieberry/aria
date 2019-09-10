import React from 'react';
import {Link} from 'react-router-dom';

const Splash = ({currentUser, logout}) => {
    // if not signed in, display sign in / sign up buttons
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    // if signed in, display name and log out button
    const sessionLinked = () => (
        <div className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? sessionLinked() : sessionLinks();
    // return currentUser ? "logged in" : "logged out";
};

// const Splash = () => (
//     <h1>this is splash.jsx</h1>
// )

export default Splash;