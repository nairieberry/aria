import {connect} from 'react-redux';
import {createNewUser} from '../actions/session';
import Signup from './session_form';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);