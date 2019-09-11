import {connect} from 'react-redux';
import {logout} from '../../actions/session';

import Splash from './splash';

const mapStateToProps = state => ({
    user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);