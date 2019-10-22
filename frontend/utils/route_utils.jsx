import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.id)}
};

const Auth = ({loggedIn, path, component: Component}) => {
    // debugger
    return (<Route 
            path={path}
            render={props => (
                loggedIn ? <Redirect to="/channels/1/1" /> : <Component {...props} />
                // the first one should be where you want them to be sent if they are logged in
                )}
            />)
    };

const Protected = ({loggedIn, path, component: Component}) => (
    <Route
    path={path}
    render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));