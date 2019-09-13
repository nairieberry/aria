import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {showServer} from '../../actions/server';
import ServerShow from './server_show';

const mapStateToProps = (state, ownProps) => {
    debugger
    let serverId = ownProps.match.params.serverId;
    return{
        server: state.entities.servers[serverId]
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        show: (id) => dispatch(showServer(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);