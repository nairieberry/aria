import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Register',
        navLink: <Link to="/login">Already have an account?</Link>
    };
};

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);