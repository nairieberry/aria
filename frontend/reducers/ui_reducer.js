import {combineReducers} from 'redux';

import modal from './modal_reducer';
import currentServer from './current_server_reducer';

export default combineReducers({
    modal,
    currentServer,
});