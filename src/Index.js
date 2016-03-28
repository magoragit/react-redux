import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Pages
import App from './pages/App'
import Movies from './pages/Movies/Movies'

window.React = React;

const store = configureStore();
const history = createBrowserHistory();

render(
    <Provider store={store}>
            <Router history={history}>
                <Route path="/" component = {App} >
                    <Route path="movies" component={Movies} />
                </Route>
            </Router>
    </Provider>,
    document.getElementById('content')
);