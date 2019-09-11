import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup} from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Sign Up',
        navLink: <Link to="/login">Login instead</Link>
    };
};

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);