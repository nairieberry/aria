import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Login',
        navLink: <Link to ="/signup">Sign Up instead</Link>
    };
};

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);