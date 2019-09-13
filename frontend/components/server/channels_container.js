import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {serverIndex, showServer, newServer, editServer} from '../../actions/server';
import ServerIndex from './server_index';

const mapStateToProps = (state) => {
    // debugger
    // gives you an array of all the servers because servers are listed under their id as a key
    let servers = Object.values(state.entities.servers)
    return{
        // now you're putting them into props
        // props key - state value
        servers: servers,
    };
};

const mapDispatchToProps = dispatch => ({
    index: () => dispatch(serverIndex()),
    // you only need the index function for the index page
    // show: id => dispatch(showServer(id)),
    // new: server => dispatch(newServer(server)),
    // edit: server => dispatch(editServer(server)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);