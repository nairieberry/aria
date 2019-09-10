import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
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

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});