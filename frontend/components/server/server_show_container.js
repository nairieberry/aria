import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {showServer} from '../../actions/server';
import ServerShow from './server_show';

const mapStateToProps = (state) => {
    debugger
    return{

    };
};

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);