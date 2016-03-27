import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// Pages
import App from './pages/App'
import Movies from './pages/Movies'

// Languages
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance

window.React = React;

const store = configureStore();

render(
    <Provider store={store}>
        <I18nextProvider i18n={ i18n }>
            <Router>
                <Route path="/" component = {App} >

                </Route>
                <Route path="/movies" component={Movies} />
            </Router>
        </I18nextProvider>
    </Provider>,
    document.getElementById('content')
);