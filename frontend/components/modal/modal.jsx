import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    
}