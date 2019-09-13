import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing
// import * as utils from './utils/server';
import * as actions from './actions/server';

document.addEventListener('DOMContentLoaded', () => {
    // debugger
    let store;

    if (window.user) {
        const preloadedState = {
            session: {id: window.user.id},
            entities: {
                users: {[window.user.id]: window.user}
            }
        };
        store = configureStore(preloadedState);
        delete window.user;
    } else {
        store = configureStore();
    }

// put these tests after store and before render
window.store = store;
window.dispatch = store.dispatch;
window.getState = store.getState;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

// testing
// window.utils = utils
window.actions = actions