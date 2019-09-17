import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ChannelIndexContainer from '../channel/channel_index_container';
import ServerIndexContainer from '../server/server_index_container';

import CreateChannelContainer from '../channel/channel_form';

function Modal({modal, closeModal}) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'server':
            component = <CreateServerContainer />;
            break;
        case 'channel':
            component = <CreateChannelContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-thing" onClick={e =>
            e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);