import React from 'react';
import {connect} from 'react-redux';
import {openModel, closeModal} from '../../actions/modal_actions';

// import the action to create a new server
// import the file you want that button on

const mapStateToProps = ({}) => {
    return {
        formType: 'newserver',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (server) => dispatch(createserver(server)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)()

// you don't need this entire file