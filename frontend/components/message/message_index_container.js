import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {messageIndex} from '../../actions/message';
import MessageIndex from './message_index';

const mapStateToProps = (state) => {
    let messages = Object.values(state.entities.messages)
    return{
        messages: messages,
    };
};

const mapDispatchToProps = dispatch => ({
    index: () => dispatch(messageIndex()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);