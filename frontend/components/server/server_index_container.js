import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {serverIndex, showServer, newServer, editServer} from '../../actions/server';
import ServerIndex from './server_index';

import {openModal, closeModal} from '../../actions/modal_actions';

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
    newServer: (server) => dispatch(newServer(server)),
    openModal: (
        <button className="server-form-button" onClick={() => dispatch
        (openModal('server'))}>+</button>
    ),
    closeModal: () => dispatch(closeModal()),
    // you only need the index function for the index page
    // show: id => dispatch(showServer(id)),
    // new: server => dispatch(newServer(server)),
    // edit: server => dispatch(editServer(server)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);