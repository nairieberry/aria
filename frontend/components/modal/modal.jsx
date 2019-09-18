import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ChannelIndexContainer from '../channel/channel_index_container';
import ServerIndexContainer from '../server/server_index_container';

import CreateChannelContainer from '../channel/channel_form';
import {newChannel} from '../../actions/channel';

function Modal({modal, closeModal, newChannel, id}) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'server':
            component = <CreateServerContainer />;
            break;
        case 'channel':
            component = <CreateChannelContainer newChannel={newChannel} id={id} />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e =>
            e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        id: state.ui.currentServer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        newChannel: (channel) => dispatch(newChannel(channel)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);