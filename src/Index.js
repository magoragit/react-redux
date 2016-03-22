import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/App'
import AppArticle from './containers/AppArticle'

window.React = React;

const store = configureStore();


render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
            <Route path="/article/:articleId" component={AppArticle}></Route>
        </Router>
    </Provider>,
    document.getElementById('content')
);