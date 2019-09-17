import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

function Modal({modal, closeModal}) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'server':
            component = <ServerModalContainer />;
            break;
        case 'channel':
            component = <ChannelModalContainer />;
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