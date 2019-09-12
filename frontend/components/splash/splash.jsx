import React from 'react';
import {Link} from 'react-router-dom';

const Splash = ({user, logout}) => {
    // if not signed in, display sign in / sign up buttons
    const notloggedin = () => (
        <div className="splash-login-register">
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="/register">Register</Link>
        </div>
    );

    // if signed in, display name and log out button
    const loggedin = () => (
        <div className="splash-logged-in">
        <h2 className="splash-logged-in-as">Logged in as: {user.username}!</h2>
        <button className="splash-logged-in-logout" onClick={logout}>Log Out</button>
        </div>
    )

    return user ? loggedin() : notloggedin();
    // return user ? "logged in" : "logged out";
};

// const Splash = () => (
//     <h1>this is splash.jsx</h1>
// )

export default Splash;