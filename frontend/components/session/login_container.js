import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        banner: 'Welcome back!',
        banner2: "We're so excited to see you again!",
        buttonText: 'Login',
        navLink: <Link to ="/register">Need an account? Register</Link>,
    };
};

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);