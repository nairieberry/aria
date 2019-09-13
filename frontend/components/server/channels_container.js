import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {showServer, newServer, editServer} from '../../actions/server';
import ServerForm from './server_form';

const mapStateToProps = ({ errors }) => {
    return {
// do I need text here when I can just manually put in whatever into the jsx?
// why am I feeding in errors?
    };
};

const mapDispatchToProps = dispatch => ({
    show: id => dispatch(showServer(id)),
    new: server => dispatch(newServer(server)),
    edit: server => dispatch(editServer(server)),
// do I need these functions here? if so, which ones and why?
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);