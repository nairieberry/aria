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

                <div className="splash-button-box">
                    <div className="splash-green-button-box">
                        <Link className="splash-button" to="/">Download for macOS</Link>
                    </div>
                    <div className="splash-blue-button-box">
                        <Link className="splash-button" to="/">Open Discord in your browser</Link>
                    </div>
                </div>
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