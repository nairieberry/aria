import React from 'react';
import {Link} from 'react-router-dom';

const Splash = ({user, logout}) => {
    // if not signed in, display sign in / sign up buttons
    const notloggedin = () => (
        <div className="splash">
            <div className="splash-box">
                <Link className="splash-login-link" to="/login">Login</Link>
                {/* &nbsp; */}
                {/* <Link className="splash-login-link" to="/register">Register</Link> */}

                <div className="splash-intro">It's time to ditch Skype and Teamspeak.</div>
                <div className="splash-intro2">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for Teamspeak servers and hassling with Skype. Simplify your life.</div>

                <Link className="splash-green-button" to="/login">Green button</Link>
                <Link className="splash-blue-button" to="/login">Blue button</Link>
            </div>
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