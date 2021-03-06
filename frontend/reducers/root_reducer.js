import {combineReducers} from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import ui from './ui_reducer';

export default combineReducers({
    entities: entities,
    session: session,
    ui: ui,
});